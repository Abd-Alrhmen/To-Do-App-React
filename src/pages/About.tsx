const About = () => {
    return (
        <div className="container py-5">
          <h2 className="text-center text-primary mb-4">About This App</h2>
          <p>
            This is a simple To-Do list app built using <strong>React</strong>, <strong>TypeScript</strong>,
            and <strong>Redux Toolkit</strong>. It allows you to add and delete tasks easily,
            and stores your data in the browser using <strong>localStorage</strong>.
          </p>
          <p>
            The app also uses <strong>React Router</strong> for navigation and <strong>Bootstrap</strong> for styling.
          </p>
          <p>
            The goal of this app is to demonstrate how to manage state using Redux, persist data, and build
            clean, modular React applications with modern tools.
          </p>
        </div>
    );
}
export default About;