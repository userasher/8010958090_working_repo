import Layout from "./../components/Layout";
const HomePage = () => {
  // login user data
  // const getUserData = async () => {
  //   try {
  //     const res = await axios.post(
  //       "/api/v1/user/getUserData",
  //       {},
  //       {
  //         headers: {
  //           Authorization: "Bearer " + localStorage.getItem("token"),
  //         },
  //       }
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //   useEffect(() => {
  //     getAllToDO(setToDo);
  //   }, []);
  return (
    <Layout>
      <h1>Home Page</h1>
      <hr></hr>
      <div className="div container">
        <div className="div top">Welcome to Vjti Railway Concession</div>
      </div>
    </Layout>
  );
};

export default HomePage;
