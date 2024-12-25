
import { SingUpform } from "@/components/SingUp-form"

export default function SingUp() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      
      <div className="relative hidden bg-muted lg:block">
        <img
          src="https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4320.jpg?t=st=1734589728~exp=1734593328~hmac=a6f114dfb8e5286bb864a043f7c432bb16daa6524f5d97d3fb341cba5629a617&w=826"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SingUpform />
          </div>
        </div>
      </div>
    </div>
  )
}
