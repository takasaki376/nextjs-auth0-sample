import { Logo } from "src/components/Logo";

export const Hero = () => {
  return (
    // TODO
    <div className="hero my-5 text-center" data-testid="hero">
      <Logo testId="hero-logo" />
      <h1 className="mb-4" data-testid="hero-title">
        Next.js Sample Project
      </h1>
      {/* TODO */}
      <p className="lead" data-testid="hero-lead">
        This is a sample application that demonstrates an authentication flow
        for a Regular Web App, using <a href="https://nextjs.org">Next.js</a>
      </p>
    </div>
  );
};
