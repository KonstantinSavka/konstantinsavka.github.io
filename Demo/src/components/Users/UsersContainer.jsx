import {connect} from "react-redux";
import {
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    setPageSize,
    toggleIsFetching,
} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {setDeleted} from "../../redux/profileReducer";

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

    render() {
        return <>
            {this.props.isFetching? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                        setDeleted={this.props.setDeleted}
                      users={this.props.users}
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
        usersPerPage: state.usersPage.usersPerPage
    }
};


export default connect(mapStateToProps, {
    setUsers,
    setPageSize,
    setCurrentPage,
    setTotalUsersCount,
    setDeleted,
    toggleIsFetching,
})(UsersContainer)