import React from 'react'
import Table from 'react-bootstrap/Table';
import DashboardAdmin from './DashboardAdmin';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeams } from '../Redux/Slice/teamSlice'; // adjust path

function Teams() {

  const dispatch = useDispatch();
  const { teams, loading, error } = useSelector((state) => state.team);

  useEffect(() => {
    dispatch(fetchTeams());
  }, [dispatch]);


  return (
    <>
      <div className='d-flex'>
        <DashboardAdmin />
        <div className='mt-2 form-control '>
          <h2 className='w-100 fw-bold text-center mb-3'>Ipl Teams</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Team Name</th>
                <th>Captian Name</th>
                <th>Username</th>
                <th>Coach Name</th>
                <th>Stats</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan="6">Loading...</td></tr>
              ) : error ? (
                <tr><td colSpan="6">Error: {error}</td></tr>
              ) : (
                teams.map((team, index) => (
                  <tr key={team._id}>
                    <td>{index + 1}</td>
                    <td>{team.teamName}</td>
                    <td>{team.captainName}</td>
                    <td>{team.coachname }</td>
                    <Link to={`/team/stats/${team._id}`}>
                      <i className="fa-solid fa-square-arrow-up-right fa-xl"></i>
                    </Link>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>
      </div>

    </>
  )
}

export default Teams