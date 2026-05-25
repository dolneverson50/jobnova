'use client';

import { useEffect, useState } from 'react';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Badge } from '@/components/ui/badge';

import { Button } from '@/components/ui/button';

export default function AdminPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [requests, setRequests] = useState<any[]>([]);

  useEffect(() => {
    fetchUsers();
    fetchRequests();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/users`
      );

      const data = await res.json();

      setUsers(data);
    } catch (error) {
      console.error('Failed to fetch users', error);
    }
  };

  const fetchRequests = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/requests`
      );

      const data = await res.json();

      setRequests(data);
    } catch (error) {
      console.error('Failed to fetch requests', error);
    }
  };

  const approveRequest = async (id: string) => {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/requests/${id}/approve`,
        {
          method: 'PATCH',
        }
      );

      fetchRequests();
    } catch (error) {
      console.error('Approve failed', error);
    }
  };

  const rejectRequest = async (id: string) => {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/requests/${id}/reject`,
        {
          method: 'PATCH',
        }
      );

      fetchRequests();
    } catch (error) {
      console.error('Reject failed', error);
    }
  };

  const verifyProvider = async (id: string) => {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/providers/${id}/verify`,
        {
          method: 'PATCH',
        }
      );

      fetchUsers();
    } catch (error) {
      console.error('Verification failed', error);
    }
  };

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-4xl font-bold">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-bold">
              {users.length}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Requests</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-bold">
              {requests.length}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pending Requests</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-bold">
              {
                requests.filter(
                  (r: any) => r.status === 'PENDING'
                ).length
              }
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Approved Requests</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-bold">
              {
                requests.filter(
                  (r: any) => r.status === 'ACCEPTED'
                ).length
              }
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Users</CardTitle>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Verification</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {users.map((user: any) => (
                <TableRow key={user.id}>
                  <TableCell>
                    {user.email}
                  </TableCell>

                  <TableCell>
                    <Badge>{user.role}</Badge>
                  </TableCell>

                  <TableCell>
                    {user.isVerified ? (
                      <Badge>Verified</Badge>
                    ) : (
                      <Badge>Pending</Badge>
                    )}
                  </TableCell>

                  <TableCell>
                    {!user.isVerified && (
                      <Button
                        onClick={() =>
                          verifyProvider(user.id)
                        }
                      >
                        Verify
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            Service Requests
          </CardTitle>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {requests.map((request: any) => (
                <TableRow key={request.id}>
                  <TableCell>
                    {request.category}
                  </TableCell>

                  <TableCell>
                    {request.description}
                  </TableCell>

                  <TableCell>
                    <Badge>
                      {request.status}
                    </Badge>
                  </TableCell>

                  <TableCell>
                    {request.client?.email}
                  </TableCell>

                  <TableCell className="space-x-2">
                    <button
                      onClick={() =>
                        approveRequest(request.id)
                      }
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() =>
                        rejectRequest(request.id)
                      }
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Reject
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}