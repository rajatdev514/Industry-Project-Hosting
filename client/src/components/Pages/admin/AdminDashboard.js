import React, { useState, useEffect } from "react";
import axios from "axios";
import ExcelJS from "exceljs"; // Import exceljs for advanced styling and image support
import FileSaver from "file-saver"; // To handle file download in the browser
import Layout from "../../Layout/Layout"; // Assuming you're using this layout component

const AdminDashboard = () => {
  const [admins, setAdmins] = useState([]);
  const [users, setUsers] = useState([]);
  const [contactSubmissions, setContactSubmissions] = useState([]);

  // Fetch users and admins on component mount
  useEffect(() => {
    const fetchUsersAndAdmins = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/users`);
        if (data.success) {
          // Separate admins and users based on role
          setAdmins(data.users.filter((user) => user.role === 1)); // Admins
          setUsers(data.users.filter((user) => user.role === 0)); // Regular users
        }
      } catch (error) {
        console.log("Error fetching users", error);
      }
    };
    fetchUsersAndAdmins();
  }, []);

  // Fetch contact submissions
  useEffect(() => {
    const fetchContactSubmissions = async () => {
      try {
        const { data } = await axios.get("/api/v1/auth/contact-submissions");
        if (data.success) {
          setContactSubmissions(data.submissions);
        }
      } catch (error) {
        console.log("Error fetching contact submissions", error);
      }
    };
    fetchContactSubmissions();
  }, []);

  // Function to export user data to Excel with styles and image
  const exportUserDataToExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Users");

    // Set header row with styling
    worksheet.columns = [
      { header: "Name", key: "name", width: 30 },
      { header: "Email", key: "email", width: 30 },
      { header: "Phone", key: "phone", width: 20 },
    ];

    // Apply styles to the header row
    worksheet.getRow(1).font = { bold: true, color: { argb: "FF0000" } }; // Red text
    worksheet.getRow(1).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FFFF00" }, // Yellow background
    };

    // Add user data with alternating row color
    users.forEach((user, index) => {
      const row = worksheet.addRow({
        name: user.name,
        email: user.email,
        phone: user.phone,
      });

      // Add alternating background color to rows
      row.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: index % 2 === 0 ? "ADD8E6" : "FFFFFF" }, // Light red for alternate rows
      };
    });

    // Generate Excel file and trigger download
    const buffer = await workbook.xlsx.writeBuffer();
    FileSaver.saveAs(new Blob([buffer]), "user_data.xlsx");
  };

  // Function to export contact submissions to Excel with styles
  const exportContactDataToExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Contact Submissions");

    // Set header row with styling
    worksheet.columns = [
      { header: "Name", key: "name", width: 30 },
      { header: "Email", key: "email", width: 30 },
      { header: "Phone", key: "phone", width: 20 },
      { header: "Enquiry", key: "enquiry", width: 40 },
      { header: "Location", key: "location", width: 30 },
      { header: "Message", key: "message", width: 50 },
    ];

    // Apply styles to the header row
    worksheet.getRow(1).font = { bold: true, color: { argb: "FF0000" } }; // Red text
    worksheet.getRow(1).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FFFF00" }, // Yellow background
    };

    // Add contact submissions data
    contactSubmissions.forEach((submission, index) => {
      const row = worksheet.addRow({
        name: submission.name,
        email: submission.email,
        phone: submission.phone,
        enquiry: submission.enquiry.join(", "), // Joining enquiries with commas
        location: submission.location,
        message: submission.message,
      });

      // Apply alternating background color for rows
      row.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: index % 2 === 0 ? "ADD8E6" : "FFFFFF" }, // Light red for alternate rows
      };
    });

    // Generate Excel file and trigger download
    const buffer = await workbook.xlsx.writeBuffer();
    FileSaver.saveAs(new Blob([buffer]), "contact_submissions.xlsx");
  };

  return (
    <Layout>
      <div className="admin-dashboard">
        <h1 className="admin-h1">Admin Dashboard</h1>

        {/* Display registered Admins */}
        <h2 className="admin-h2">Registered Admins</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <tr key={admin._id}>
                <td>{admin.name}</td>
                <td>{admin.email}</td>
                <td>{admin.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Display registered Users */}
        <h2 className="admin-h2">Registered Users</h2>
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Buttons for exporting data */}
        <div className="export-button-container">
          {/* Download user data button */}
          <button className="export-button" onClick={exportUserDataToExcel}>
            Download User Data
          </button>

          {/* Download contact submissions button */}
          <button className="export-button" onClick={exportContactDataToExcel}>
            Download Contact Submissions
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
