import React from "react";
import { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { fetchUsers } from "./api";
import { render } from "@testing-library/react";
const Quanlynv = () => {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [searchID, setSearchID] = React.useState("");
  const [searchUsername, setSearchUsername] = React.useState("");

  // Hàm xử lý sự kiện thay đổi giá trị tìm kiếm

  useEffect(() => {
    const fetchApiUsers = async () => {
      try {
        const response = await fetchUsers();
        setUsers(response);
        setLoading(false);
      } catch (error) {}
    };
    fetchApiUsers();
  }, []);
  const handleSearchIDChange = (e) => {
    setSearchID(e.target.value);
  };

  const handleSearchUsernameChange = (e) => {
    setSearchUsername(e.target.value);
  };
  const navigate = useNavigate();
  //render danh sách user từ api
  const renderUsers = () => {
    if (loading) return <p>Loading...</p>;

    // Áp dụng tìm kiếm theo ID và username
    const filteredUsers = users.filter(
      (user) =>
        (user.userID ?? "")
          .toString()
          .toLowerCase()
          .includes(searchID.toLowerCase()) &&
        user.username.toLowerCase().includes(searchUsername.toLowerCase()),
    );

    return filteredUsers.map((user, index) => (
      <tr key={index}>
        <td width="10">
          <input type="checkbox" name="check1" value="1" />
        </td>
        <td>{user.userID}</td>
        <td>{user.username}</td>

        <td>
          {user.flat} {user.street} {user.state} {user.city}
        </td>

        <td>{user.mobile}</td>

        <td
          class="table-td-center"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <button
            class="btn btn-primary btn-sm trash"
            type="button"
            title="Xóa"
            onclick="myFunction(this)"
          >
            <i class="fas fa-trash-alt"></i>
          </button>
          <button
            class="btn btn-primary btn-sm edit"
            type="button"
            title="Sửa"
            id="show-emp"
            data-toggle="modal"
            data-target="#ModalUP"
          >
            <i class="fas fa-edit"></i>
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <body onload="time()" class="app sidebar-mini rtl">
      {/* <!-- Navbar--> */}

      <main class="app-content">
        <div class="app-title">
          <ul class="app-breadcrumb breadcrumb side">
            <li class="breadcrumb-item ">
              <a href="#">
                <b>Danh sách khách hàng</b>
              </a>
            </li>
          </ul>
          <div id="clock"></div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="tile">
              <div class="tile-body">
                <div class="row element-button">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Tìm kiếm theo ID"
                      value={searchID}
                      onChange={handleSearchIDChange}
                    />
                  </div>

                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Tìm kiếm theo username"
                      value={searchUsername}
                      onChange={handleSearchUsernameChange}
                    />
                  </div>
                </div>
                <table
                  class="table table-hover table-bordered js-copytextarea"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  id="sampleTable"
                >
                  <thead>
                    <tr>
                      <th width="10">
                        <input type="checkbox" id="all" />
                      </th>
                      <th style={{ fontSize: "20px", fontWeight: "600" }}>
                        ID
                      </th>
                      <th
                        width="20%"
                        style={{ fontSize: "20px", fontWeight: "600" }}
                      >
                        User
                      </th>
                      <th style={{ fontSize: "20px", fontWeight: "600" }}>
                        Địa chỉ
                      </th>

                      <th
                        width="15%"
                        style={{ fontSize: "20px", fontWeight: "600" }}
                      >
                        SDT
                      </th>

                      <th
                        width="10%"
                        style={{ fontSize: "20px", fontWeight: "600" }}
                      >
                        Tính năng
                      </th>
                    </tr>
                  </thead>
                  <tbody>{renderUsers()}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* <!--
  MODAL
--> */}
      <div
        class="modal fade"
        id="ModalUP"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
        data-backdrop="static"
        data-keyboard="false"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <div class="row">
                <div class="form-group  col-md-12">
                  <span class="thong-tin-thanh-toan">
                    <h5>Chỉnh sửa thông tin nhân viên cơ bản</h5>
                  </span>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label class="control-label">ID nhân viên</label>
                  <input
                    class="form-control"
                    type="text"
                    required
                    value="#CD2187"
                    disabled
                  />
                </div>
                <div class="form-group col-md-6">
                  <label class="control-label">Họ và tên</label>
                  <input
                    class="form-control"
                    type="text"
                    required
                    value="Nguyễn Vũ Duy Hoài"
                  />
                </div>
                <div class="form-group  col-md-6">
                  <label class="control-label">Số điện thoại</label>
                  <input
                    class="form-control"
                    type="number"
                    required
                    value="09267312388"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label class="control-label">Địa chỉ email</label>
                  <input
                    class="form-control"
                    type="text"
                    required
                    value="truong.vd2000@gmail.com"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label class="control-label">Ngày sinh</label>
                  <input class="form-control" type="date" value="15/03/2000" />
                </div>
                <div class="form-group  col-md-6">
                  <label for="exampleSelect1" class="control-label">
                    Chức vụ
                  </label>
                  <select class="form-control" id="exampleSelect1">
                    <option>Bán hàng</option>
                    <option>Tư vấn</option>
                    <option>Dịch vụ</option>
                    <option>Thu Ngân</option>
                    <option>Quản kho</option>
                    <option>Bảo trì</option>
                    <option>Kiểm hàng</option>
                    <option>Bảo vệ</option>
                    <option>Tạp vụ</option>
                  </select>
                </div>
              </div>
              <br />
              <a href="#" style={{ float: "right", fontWeight: 600 }}>
                Chỉnh sửa nâng cao
              </a>
              <br />
              <br />
              <button class="btn btn-save" type="button">
                Lưu lại
              </button>
              <a class="btn btn-cancel" data-dismiss="modal" href="#">
                Hủy bỏ
              </a>
              <br />
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
      {/* <!--
  MODAL
--> */}

      {/* <!-- Essential javascripts for application to work--> */}
      {/* <script src="js/jquery-3.2.1.min.js"></script>
  <script src="js/popper.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
  <script src="src/jquery.table2excel.js"></script>
  <script src="js/main.js"></script> */}
      {/* <!-- The javascript plugin to display page loading on top--> */}
      {/* <script src="js/plugins/pace.min.js"></script> */}
      {/* <!-- Page specific javascripts--> */}
      {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.2/jquery-confirm.min.js"></script> */}
      {/* <!-- Data table plugin--> */}
      <script
        type="text/javascript"
        src="js/plugins/jquery.dataTables.min.js"
      ></script>
      <script
        type="text/javascript"
        src="js/plugins/dataTables.bootstrap.min.js"
      ></script>
      <script type="text/javascript">$('#sampleTable').DataTable();</script>
      {/* <script>
    function deleteRow(r) {
      var i = r.parentNode.parentNode.rowIndex;
      document.getElementById("myTable").deleteRow(i);
    }
    jQuery(function () {
      jQuery(".trash").click(function () {
        swal({
          title: "Cảnh báo",
         
          text: "Bạn có chắc chắn là muốn xóa nhân viên này?",
          buttons: ["Hủy bỏ", "Đồng ý"],
        })
          .then((willDelete) => {
            if (willDelete) {
              swal("Đã xóa thành công.!", {
                
              });
            }
          });
      });
    });
    oTable = $('#sampleTable').dataTable();
    $('#all').click(function (e) {
      $('#sampleTable tbody :checkbox').prop('checked', $(this).is(':checked'));
      e.stopImmediatePropagation();
    }); */}

      {/* //EXCEL
    // $(document).ready(function () {
      $('#').DataTable({ */}

      {/* //     dom: 'Bfrtip',
    //     "buttons": [
    //       'excel'
    //     ]
    //   });
    // }); */}
    </body>
  );
};

export default Quanlynv;
