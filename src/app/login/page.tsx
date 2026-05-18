import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <section className="container-px grid min-h-[70vh] place-items-center bg-[#fff7ef] py-14">
      <div className="grid w-full max-w-4xl overflow-hidden rounded-[8px] border border-[#eadfd7] bg-white shadow-sm lg:grid-cols-2">
        <div className="bg-[#171211] p-8 text-white md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f6df9e]">
            Account
          </p>
          <h1 className="mt-5 text-5xl font-semibold leading-tight">
            Faster checkout, saved sets, and course access.
          </h1>
          <p className="mt-5 leading-8 text-[#d8ccc4]">
            A premium login/register surface supports shoppers and students
            without splitting them into separate experiences.
          </p>
        </div>
        <form className="grid gap-4 p-8 md:p-10">
          <Input placeholder="Email address" type="email" />
          <Input placeholder="Password" type="password" />
          <Button type="submit" size="lg">
            Login
          </Button>
          <Button type="button" variant="outline" size="lg">
            Create account
          </Button>
          <Link href="/contact" className="text-center text-sm text-[#9b6b2e]">
            Need help accessing a course?
          </Link>
        </form>
      </div>
    </section>
  );
}
