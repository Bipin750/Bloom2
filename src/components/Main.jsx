import React, { useEffect, useState } from "react";

const Main = () => {
  const [value, setValue] = useState("");
  const [secIndex, setSecIndex] = useState();
  const [product, setProduct] = useState(true);

  const getData = () => {
    fetch("contract.txt")
      .then(function (response) {
        return response.text();
      })
      .then(function (data) {
        setValue(data);
        const ans = value.split("\n");
        // console.log(ans);

        const splitted_data = ans.map((val) => {
          const data = val.split("|");
          return data;
        });
        // console.log(splitted_data);

        // const secondIndex = splitted_data.map((val) => {
        //   return val[2];
        // });
        // console.log(secondIndex);

        const symbol = splitted_data.map((val) => {
          return val[3];
        });
        setSecIndex(symbol);
        console.log(secIndex);
      });
  };

  const handleChange = () => {
    //  const symbol = new Set(secIndex);
    //  symbol.add(secIndex);
    //  console.log(symbol);
  };
  useEffect(()=>{
    getData();
  },[])



  return (
    <div className="main">
      <input type="radio" value="NFO" name="radio" className="radio" />
      NFO
      <input type="radio" value="CDS" name="radio" className="radio" />
      CDS
      <input type="radio" value="MCX" name="radio" className="radio" />
      MCX
      <div className="input-box">
        {/* <div>
          <p  className="label">Symbol</p>
          <input
            type="text"
            className="input"
            placeholder="Select"
            onClick={getData}
            onChange={handleChange}
          />
        </div> */}

        <div className="dropdown">
          <p className="label">Symbol</p>
          <select name="" id="" >
            <option>Select</option>
            {/* {secIndex.map((val)=>( <option>{val}</option>))} */}
          </select>
        </div>
        <div className="dropdown">
          <p className="label">Product</p>

          <select name="" id="">
            {/* {secIndex.map((val)=>( <option>{val}</option>))} */}
            <option>Select</option>
            <option>Future</option>
            <option>Option</option>
          </select>
        </div>

        <div className="dropdown">
          <p className="label">Expiry</p>

          <select name="" id="">
            {/* {secIndex.map((val)=>( <option>{val}</option>))} */}
            <option>Select</option>
            <option>asdfasdfsdf</option>
          </select>
        </div>
      </div>
      <div className="input-box">
        <div className="dropdown">
          <p className="label">Option Type </p>

          <select name="" id="">
            {/* {secIndex.map((val)=>( <option>{val}</option>))} */}
            <option>Select</option>
            <option>asdfasdfsdf</option>
          </select>
        </div>

        <div className="dropdown">
          <p className="label">Strike Price</p>
          <select name="" id="">
            {/* {secIndex.map((val)=>( <option>{val}</option>))} */}
            <option>Select</option>
            <option>asdfasdfsdf</option>
          </select>
        </div>

        <div className="buy">
          <input type="radio" name="Buy" id="" />
          Buy
          <input type="radio" name="Buy" id="" />
          Sell
        </div>
      </div>
      <div className=" lots">
        <div>
          <p className="label">Lots</p>
          <input type="number" className="input" />
        </div>

        <div className="quantity">
          <p>Net Quantity:0</p>
        </div>
        <div className="button">
          <button>Add</button>
          <button>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
