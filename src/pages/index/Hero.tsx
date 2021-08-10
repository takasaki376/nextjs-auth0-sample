import { Logo } from "src/pages/index/Logo";

export const Hero = () => {
  return (
    <div className="mx-auto my-5 max-w-lg text-center" data-testid="hero">
      <Logo testId="hero-logo" />
      <h1 className="mb-4" data-testid="hero-title">
        Next.js Sample Project
      </h1>
      <p className="mb-40 text-2xl" data-testid="hero-lead">
        This is a sample application that demonstrates an authentication flow
        for a Regular Web App, using <a href="https://nextjs.org">Next.js</a>
      </p>
    </div>
  );
};
