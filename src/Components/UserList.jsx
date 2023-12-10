import { useEffect, useState } from "react";
import { fetchallUsersfromserver } from "../services/ProfileService";
import { Container, Row } from "react-bootstrap";
import { UserListStructureCol } from "./UserListStructureCol";
import { Header } from "./Header";
import { Hidingdiv } from "./Hidingdiv";

export function UserList() {
    const [profiles, setProfile] = useState([]);
    // const [records, setRecords] = useState([]);


    async function fetchallprofilelist() {
        const response = await fetchallUsersfromserver();
        setProfile(response.data.profile_Details);
        // setRecords(response.data.profile_Details);
    }
    useEffect(() => {
        fetchallprofilelist();
    }, []);
    // const Filter=(event)=>{
    //     setRecords(profiles.filter(f=>f.name.toLowerCase().includes(event.target.values)))
    // }
    return (
        <>
            <Header></Header>
            <Hidingdiv></Hidingdiv>

            <Container>
                {/* <input type="text" className="place-control" placeholder="Enter Place.." onChange={Filter}/>
            <select>
                <option value="all">all</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select> */}
                <Row>
                    {
                        profiles.map((user) => {
                            return (
                                <UserListStructureCol userprofile={user}></UserListStructureCol>

                            );
                        })
                    }
                </Row>
            </Container>
        </>


    );
}