import Logo from './assets/hero.png';
import TextField from './components/TextField';

function App() {
  return (
    <main className="inline-flex items-center justify-end min-h-screen">
      <section className="w-1/2">
        <div className="mx-[120px] my-[160px] flex flex-col gap-[60px]">
          <h1 className="font-semibold text-[5rem] tracking-tight leading-tight">
            Sign Up for a Musical Adventure!
          </h1>
          <form className="flex flex-col gap-10 max-w-[330px]">
            <div className="flex flex-col gap-4">
              <TextField
                label="Full Name"
                placeholder="Your Name"
                type="text"
              />
              <TextField
                label="Email"
                placeholder="youremail@domain"
                type="email"
              />
              <TextField
                label="Password"
                placeholder="Password"
                type="password"
              />
              <TextField
                label="Confirm Password"
                placeholder="Retype the password"
                type="password"
              />
            </div>
            <div className="flex flex-col gap-2">
              <button className="bg-primary hover:translate-y-2 transition-transform text-[14px] flex items-center justify-center h-[40px] font-bold w-full rounded-[8px]">
                Get Started
              </button>
              <a href="/" className="text-[14px] pl-[4px]">
                Already have an account{' '}
                <span className="text-[#635BFF]">Login here!</span>
              </a>
            </div>
          </form>
        </div>
      </section>
      <section className="bg-secondary flex items-center justify-center min-h-screen w-1/2">
        <img src={Logo} alt="hand holding a phone" className="w-4/5 mx-auto" />
      </section>
    </main>
  );
}

export default App;
