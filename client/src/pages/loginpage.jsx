import Navbar from "../components/Navbar";
import Button from "../components/Button";

function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      <Navbar />

      <section className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6 py-16">

        <div className="w-full max-w-md">

          <div className="bg-white p-8 shadow-sm">

            <p className="text-sm font-bold tracking-[0.25em] text-blue-600">
              INLOGGNING
            </p>

            <h1 className="mt-3 text-4xl font-extrabold text-blue-950">
              Logga in
            </h1>

            <p className="mt-3 text-slate-600">
              Logga in för att komma åt ditt konto.
            </p>


            <form className="mt-8 space-y-5">

              <div>
                <label className="mb-2 block text-sm font-bold text-blue-950">
                  E-post
                </label>

                <input
                  type="email"
                  placeholder="din@email.se"
                  className="w-full border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>


              <div>
                <label className="mb-2 block text-sm font-bold text-blue-950">
                  Lösenord
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>


              <div className="pt-2">
                <Button variant="primary">
                  LOGGA IN
                </Button>
              </div>

            </form>

          </div>

        </div>

      </section>

    </div>
  );
}

export default LoginPage;