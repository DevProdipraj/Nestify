import React from "react";

const page = () => {
  return (
    <div>
      <div className="container">
        <div className="lg:flex items-center justify-center">
          {/* side MENU  */}
          <div className="w-full lg:w-1/3">
           {/* brand option  */}
           <div className="">
            <select name="brand" id="">
              <option value=""></option>
              <option value="">AA</option>
            </select>
           </div>
          </div>
          {/* product cards  */}
          <div className="w-full lg:w-2/3">
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
              necessitatibus animi, quaerat voluptate inventore, excepturi quos
              mollitia veritatis obcaecati provident natus exercitationem
              voluptatem ipsa. Cumque ratione rem explicabo distinctio sint?
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
