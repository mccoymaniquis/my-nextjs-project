import React from "react";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col h-full p-6">
      <Card className="flex-grow">
        <CardHeader>
          <CardTitle>Employee List</CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        {/* <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter> */}
      </Card>
    </div>
  );
}
