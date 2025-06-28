import {connect} from "react-redux";
import {
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    deleteUser,
    setPageSize,
    toggleIsFetching,
} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {setDeleted} from "../../redux/profileReducer";
import {compose} from "redux";
import {toggleIsOpen,
        setUserName,
        setUserId,
        setMessage,
        setPopupType} from "../../redux/popupReducer";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        const params = new URLSearchParams();
        params.append('page',`${this.props.currentPage}`);
        params.append('limit', this.props.usersPerPage);
        axios.get(`https://67693632cbf3d7cefd39fadc.mockapi.io/users`)
            .then((response)=>{
                this.props.setTotalUsersCount(
                    response.data.length
                )
                this.props.setPageSize(
                    this.props.usersPerPage
                )
            })


        axios.get(`https://67693632cbf3d7cefd39fadc.mockapi.io/users`, {params})
            .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(
                response.data
            );
        })
    }

    onPageChanged = (pageNum) => {
        this.props.setCurrentPage(pageNum);
        this.props.toggleIsFetching(true);

        const params = new URLSearchParams();
        params.append('limit', this.props.usersPerPage);
        params.append('page', pageNum);

        axios.get(`https://67693632cbf3d7cefd39fadc.mockapi.io/users` ,{params}).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(
                response.data
            );
        })
    };

    deleteUser = (id) => {
        this.props.toggleIsFetching(true);
        axios.delete(`https://67693632cbf3d7cefd39fadc.mockapi.io/users/${id}`)
            .then((response)=>{
                this.props.deleteUser() //нужен ли этот экшн
                this.props.setTotalUsersCount(
                    this.props.totalUsersCount - 1
                )
            })
            .then(()=>{
                if(!(this.props.users.length - 1)) {
                    this.onPageChanged(Math.ceil(this.props.totalUsersCount / this.props.pageSize))
                } else {
                    this.onPageChanged(this.props.currentPage)
                }
                this.props.toggleIsFetching(false);
            }).then(()=>{
                this.props.setPopupType('NOTIFICATION')
                this.props.setMessage('User Deleted')
                this.props.toggleIsOpen(true)
        })
    }

    render() {
        return <>
            {this.props.isFetching? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      setDeleted={this.props.setDeleted}
                      deleteUser={this.deleteUser}
                      users={this.props.users}
                      popup={this.props.popup}
                      toggleIsOpen={this.props.toggleIsOpen}
                      setUserName={this.props.setUserName}
                      setUserId={this.props.setUserId}
                      setPopupType={this.props.setPopupType}
                      onPageChanged={this.onPageChanged}/>
        </>
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        popup: state.popup.isOpen,
        usersPerPage: state.usersPage.usersPerPage
    }
};


export default compose(connect(mapStateToProps, {
    setUsers,
    setPageSize,
    setCurrentPage,
    setTotalUsersCount,
    setDeleted,
    deleteUser,
    toggleIsFetching,
    toggleIsOpen,
    setUserName,
    setUserId,
    setMessage,
    setPopupType,
}))(UsersContainer)