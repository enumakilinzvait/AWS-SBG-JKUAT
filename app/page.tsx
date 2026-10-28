
const features = [
  {
    number: "01",
    title: "Cloud Learning",
    description:
      "Explore cloud computing concepts, AWS services, and practical skills at your own pace.",
    tag: "LEARN",
  },
  {
    number: "02",
    title: "Hands-on Projects",
    description:
      "Turn theory into practice by collaborating on projects and building your technical portfolio.",
    tag: "BUILD",
  },
  {
    number: "03",
    title: "Community & Events",
    description:
      "Meet fellow students, share ideas, attend workshops, and learn from one another.",
    tag: "CONNECT",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F5FC] text-[#23213D]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
       <a href="#" className="text-xl font-extrabold tracking-tight text-[#23213D]">
  AWS SBG <span className="text-[#FF9900]">JKUAT.</span>
</a>

        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#about" className="transition hover:text-[#C87941]">About</a>
          <a href="#programs" className="transition hover:text-[#C87941]">What We Do</a>
          <a href="#events" className="transition hover:text-[#C87941]">Events</a>
        </div>

        <a
          href="#join"
         className="rounded-full bg-[#FF9900] px-5 py-3 text-sm font-bold text-[#23213D] transition hover:bg-[#E68A00]"
        >
          Join the Community ↗
        </a>
      </nav>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-16 md:grid-cols-2 md:px-10 md:pb-32 md:pt-24">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#23213D]/15 bg-white px-4 py-2 text-sm font-semibold text-[#23213D]">
           <span className="h-2 w-2 rounded-full bg-[#FF9900]" />
            JKUAT STUDENT TECH COMMUNITY 
          </div>

          <h1 className="max-w-2xl text-5xl font-black leading-[1.08] tracking-tight md:text-7xl">
            Think bigger.
          <span className="mt-2 block text-[#FF9900]">Build in the cloud.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[#6B5139]">
            Learn cloud technology, work on practical ideas, and grow alongside
            students who are excited about what technology can make possible.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#join"
              className="rounded-full bg-[#C87941] px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#A85D2A]"
            >
              Become a Member ↗
            </a>
            <a
              href="#about"
             className="rounded-full bg-[#FF9900] px-7 py-4 font-bold text-[#23213D] transition hover:-translate-y-1 hover:bg-[#E68A00]"
            >
              Discover Our Community
            </a>
          </div>

         <p className="mt-8 text-sm font-medium tracking-wide text-[#625D73]">
  LEARN TOGETHER · BUILD TOGETHER · GROW TOGETHER
</p>
        </div>

        <div className="relative">
          <div className="absolute -right-3 -top-3 h-24 w-24 rounded-full bg-[#C87941]/20 blur-2xl" />
         <div className="relative overflow-hidden rounded-[2rem] border border-[#E6E0F0] bg-white p-7 shadow-xl shadow-[#23213D]/10 md:p-10">
            <div className="flex items-center justify-between border-b border-[#E5D5A7] pb-5">
              <span className="text-sm font-bold tracking-wide">THE CLOUD JOURNEY</span>
              <span className="rounded-full bg-[#F7EFCB] px-3 py-1 text-xs font-bold">START HERE</span>
            </div>

            <div className="py-8">
              
              </div><div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#23213D] text-3xl text-[#FF9900]">
              <h2 className="text-3xl font-extrabold">Ideas into impact.</h2>
              <p className="mt-3 leading-7 text-[#6B5139]">
                Every expert starts somewhere. Find your people, learn new
                skills, and take your next step in technology.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
             <div className="rounded-2xl bg-[#F7F5FC] p-4">
  <p className="text-2xl font-black text-[#FF9900]">01</p>
  <p className="mt-1 text-sm font-semibold">Learn skills</p>
</div>
              <div className="rounded-2xl bg-[#F7F5FC] p-4">
  <p className="text-2xl font-black text-[#FF9900]">02</p>
  <p className="mt-1 text-sm font-semibold">Build projects</p>
</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-[#E5D5A7] bg-[#FFF9E9] px-6 py-16 text-center md:py-20">
        <p className="text-sm font-bold tracking-[0.2em] text-[#A85D2A]">WHO WE ARE</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold md:text-4xl">
          A place for curious minds and future builders.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#6B5139]">
          AWS SBG JKUAT brings students together to explore cloud computing,
          exchange knowledge, collaborate, and develop skills for the future.
        </p>
      </section>

      <section id="programs" className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-[#A85D2A]">WHAT WE DO</p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              Learn. Create. Connect.
            </h2>
          </div>
          <p className="max-w-md leading-7 text-[#6B5139]">
            Your journey in technology is better when you do it together.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="group rounded-3xl border border-[#E5D5A7] bg-[#FFF9E9] p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#593820]/10 md:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-[#C87941]">
                  {feature.number}
                </span>
                <span className="rounded-full bg-[#F7EFCB] px-3 py-2 text-xs font-bold tracking-wider">
                  {feature.tag}
                </span>
              </div>
              <h3 className="mt-8 text-xl font-extrabold">{feature.title}</h3>
              <p className="mt-4 leading-7 text-[#6B5139]">
                {feature.description}
              </p>
              <a
                href="#join"
                className="mt-7 inline-block font-bold text-[#A85D2A] transition group-hover:translate-x-1"
              >
                Get involved →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="events" className="px-6 pb-20 md:px-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#593820] px-7 py-12 text-[#FFF9E9] md:px-14 md:py-16">
          <p className="text-sm font-bold tracking-[0.2em] text-[#F0C28E]">KEEP EXPLORING</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold md:text-5xl">
            Your next big idea could start here.
          </h2>
          <p className="mt-5 max-w-xl leading-7 text-[#F7EFCB]">
            Look out for community workshops, learning sessions, and
            opportunities to collaborate with other students.
          </p>
          <a
            href="#join"
            className="mt-8 inline-block rounded-full bg-[#C87941] px-7 py-4 font-bold text-white transition hover:bg-[#A85D2A]"
          >
            Get Involved ↗
          </a>
        </div>
      </section>

      <section id="join" className="px-6 py-16 text-center md:py-20">
        <p className="text-sm font-bold tracking-[0.2em] text-[#A85D2A]">YOUR JOURNEY STARTS HERE</p>
        <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
          Come build with us.
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-[#6B5139]">
          Interested in cloud computing or just starting out? There is room to learn and contribute.
        </p>
        <a
          href="https://forms.gle/71sju8n7cSZDALpz7"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-block rounded-full bg-[#C87941] px-8 py-4 font-bold text-white transition hover:bg-[#A85D2A]"
        >
          Register Your Interest ↗
        </a>
        <p className="mt-3 text-xs text-[#765B40]">
          Replace this placeholder with your actual membership form link.
        </p>
      </section>

      <footer className="border-t border-[#E5D5A7] px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm text-[#765B40] md:flex-row">
          <p className="font-bold text-[#593820]">AWS SBG JKUAT</p>
          <p>© 2026 AWS SBG JKUAT · Built by students, for students.</p>
        </div>
      </footer>
    </main>
  );
}
