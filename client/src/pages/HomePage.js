import Layout from "./../components/Layout";
const HomePage = () => {
  return (
    <Layout>
      <h2 className="div top mt-3 mb-2">Welcome to Vjti Railway Concession</h2>
      <hr></hr>
      <div className="div container">
        <div className="mt-3 ml-4">
          <h2 className="text-center align-middle underline">
            Some Instruction's{" "}
          </h2>
          <li>
            Student's with Following Cateogary can only Apply for VJTI Railway
            Concesstion
            <li>Open</li>
            <li>Sc</li>
            <li>St</li>
          </li>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
            ratione recusandae, similique obcaecati iste vitae qui eveniet
            assumenda expedita dicta, excepturi magnam rem est vero tempora
            eligendi laudantium commodi sint.
          </li>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
