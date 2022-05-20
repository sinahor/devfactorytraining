import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import("./style.css");


function Dashboard() {


  useEffect(()=>{ })

  return (
    <div>
      <div className="header">User</div>

      <div className="body2">
        <div className="menu">
          <ul>
          <li>Products</li>
          <li>Orders</li>
          <li>Analytics</li>
          <li>Discounts</li></ul>
          
          
        </div>
        <div className="board">
          <table>
            <thead>
              <th>Id</th>
              <th>ProductName</th>
              <th>Qty in Stock</th>
              <th>Value</th>
            </thead>
            <tbody>
              <th>1 </th>
              <th>Shoes</th>
              <th>100</th>
              <th>500</th>
            </tbody>
            <tr>
              <th>2</th>
              <th>Socks</th>
              <th>500</th>
              <th>750</th>
            </tr>
            <tr>
              <th>3</th>
              <th>Suits</th>
              <th>50</th>
              <th>5000</th>
            </tr>
            <tr>
              <th>4</th>
              <th>pants</th>
              <th>50</th>
              <th>5000</th>
            </tr>
            <tr>
              <th>5</th>
              <th>jeans</th>
              <th>50</th>
              <th>5000</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
