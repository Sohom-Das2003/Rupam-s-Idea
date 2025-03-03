import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";

export default function SignUp() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-r from-blue-900 to-black">
      <div className="flex w-3/4 max-w-4xl overflow-hidden rounded-lg shadow-lg">
        {/* Left Side */}
        <div className="w-1/2 bg-cover bg-center p-10 text-white" style={{ backgroundImage: "url('/path-to-background.jpg')" }}>
          <h1 className="text-3xl font-bold">MOCKMATE AI</h1>
          <p className="mt-4 text-lg">Building the Future...</p>
          <p className="mt-2 text-sm opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        
        {/* Right Side */}
        <Card className="w-1/2 p-8">
          <CardContent>
            <h2 className="text-xl font-semibold">Create an Account</h2>
            <div className="mt-4">
              <Label>Your Name</Label>
              <Input type="text" placeholder="Enter your name" className="mt-1" />
            </div>
            <div className="mt-4">
              <Label>Email</Label>
              <Input type="email" placeholder="Enter your email" className="mt-1" />
            </div>
            <div className="mt-4">
              <Label>Password</Label>
              <Input type="password" placeholder="Enter your password" className="mt-1" />
            </div>
            <Button className="mt-6 w-full">Get Started</Button>
            <p className="my-4 text-center text-sm">Or</p>
            <div className="space-y-2">
              <Button variant="outline" className="flex w-full items-center gap-2">
                <FcGoogle className="text-xl" /> Sign up with Google
              </Button>
              <Button variant="outline" className="flex w-full items-center gap-2">
                <FaFacebook className="text-xl text-blue-600" /> Sign up with Facebook
              </Button>
              <Button variant="outline" className="flex w-full items-center gap-2">
                <FaApple className="text-xl" /> Sign up with Apple
              </Button>
            </div>
            <p className="mt-4 text-center text-sm">
              Already have an account? <a href="#" className="text-blue-600">Login here</a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
