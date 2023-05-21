import React from 'react';

const Blogs = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 my-10'>
            <article className='shadow-md rounded-md'>
                <h2 className='text-lg text-white font-semibold bg-blue-500 p-5 rounded-md'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p className='text-md text-gray-500 text-justify p-5'>Access tokens are credentials used to access protected resources, while refresh tokens obtain new access tokens. The access token is short-lived and sent with requests, verifying permissions. The refresh token is long-lived and securely stored on the client-side, used to obtain new access tokens without re-authenticating. For secure storage, consider HTTP-only cookies, although they're vulnerable to CSRF attacks. Local or session storage is another option, but susceptible to XSS attacks. Storing tokens in memory is more secure against XSS, but they're lost when the page is refreshed or closed. Implement proper security measures regardless of the storage method chosen. Choose the storage mechanism based on your application's requirements and security considerations.</p>
            </article>
            <article className='shadow-md rounded-md'>
                <h2 className='text-lg text-white font-semibold bg-blue-500 p-5 rounded-md'>Compare SQL and NoSQL databases?</h2>
                <p className='text-md text-gray-500 text-justify p-5'>SQL databases, or relational databases, use structured tables with predefined schemas and SQL for data manipulation. They provide strong consistency and ACID properties, suitable for complex transactions. NoSQL databases store unstructured or semi-structured data, offering flexible schemas, horizontal scalability, and high performance. They sacrifice some consistency for scalability and availability, making them suitable for big data and real-time applications. The choice depends on data structure, scalability needs, and transaction requirements. SQL is ideal for structured data and complex transactions, while NoSQL excels in handling unstructured data and scalability.</p>
            </article>
            <article className='shadow-md rounded-md'>
                <h2 className='text-lg text-white font-semibold bg-blue-500 p-5 rounded-md'>What is express js? What is Nest JS?</h2>
                <p className='text-md text-gray-500 text-justify p-5'>Express.js is a minimalist and flexible web application framework for Node.js. It simplifies building web applications and APIs by providing routing, middleware, and request/response handling. With a vast ecosystem of plugins, it offers a customizable development experience. NestJS, on the other hand, is a progressive Node.js framework influenced by Angular. It promotes code organization and modularity using TypeScript, decorators, and dependency injection. It's suitable for scalable and maintainable applications, especially in enterprise-level contexts. NestJS offers strong typing, dependency injection, and a modular architecture. While Express.js provides more flexibility and control, NestJS enforces a structured approach with an Angular-like development experience.</p>
            </article>
            <article className='shadow-md rounded-md'>
                <h2 className='text-lg text-white font-semibold bg-blue-500 p-5 rounded-md'>What is MongoDB aggregate and how does it work?</h2>
                <p className='text-md text-gray-500 text-justify p-5'>
                    MongoDB's aggregate is a framework for performing advanced data processing on collections. It uses a pipeline of stages to apply operations sequentially. Each stage modifies or analyzes data, and the output serves as input for the next stage. Stages include matching, grouping, projecting, sorting, limiting, and more. This allows developers to perform complex data manipulations directly within the database, reducing round trips and improving performance. The aggregate framework is powerful for aggregating, transforming, and analyzing data in MongoDB, enabling tasks like filtering, grouping, and calculating statistical results. It provides a flexible and efficient approach to data processing, supporting a wide range of aggregation operations and enabling developers to harness the full potential of MongoDB's document-oriented data model.</p>
            </article>
        </section>
    );
};

export default Blogs;