const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>

      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis velit necessitatibus corrupti, maiores eveniet repellendus magni ipsa est sequi ea eum possimus nulla inventore pariatur assumenda amet delectus modi. Beatae repellat voluptates temporibus neque consequuntur laudantium cumque quae sint rerum.
      </p>
    </>
  );
};

export default About;
