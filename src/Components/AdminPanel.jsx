import React, { useEffect, useState } from "react";
import { collection, getDocs,serverTimestamp } from "firebase/firestore";
import {db} from "../firebaseConfig" // Import Firestore instance
import "./AdminPanel.css";
import { Navigate, useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const navigate=useNavigate()


  const handleLogout = () => {
    localStorage.removeItem("isAdminAuthenticated");
    navigate("/admin");
  };
  

  // Fetch users from Firestore
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "queries"));
        const userList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        userList.sort((a, b) => {
            const timeA = a.timestamp?.seconds || 0;
            const timeB = b.timestamp?.seconds || 0;
            return timeB - timeA;
          });

        setUsers(userList);
      } catch (err) {
        setError("Failed to fetch user data.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);
  console.log(users)

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <p>View the data of users who have filled out the form.</p>

      {loading && <p>Loading data...</p>}
      {error && <p className="error-message">{error}</p>}

      {!loading && !error && (
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Submitted At</th>
            </tr>
          </thead>
          <tbody>
            {users.sort((u,v)=>v.id-u.id).map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.timestamp?.toDate().toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button onClick={handleLogout} style={{ padding: "7px 18px",borderRadius:'10px',position:'absolute',bottom:'5%',right:'5%', backgroundColor: "#DC143C", color: "white" ,outline:'none',border:'none'}}>
        Logout
      </button>

    </div>
  );
};

export default AdminPanel;
