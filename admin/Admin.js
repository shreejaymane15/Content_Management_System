import '/node_modules/bootstrap/dist/css/bootstrap.css';
import {React} from "react-router-dom";


function Admin(){
return <div className='container'>
    <div className='table-responsive' style={{backgroundColor:"lightblue"}}>
        <table className='table-bordered'>
          <tbody>
            <tr>
                <td colSpan={2}><center><h1 style={{color:"black"}}>Admin Page</h1></center></td>
            </tr>
            <tr>
                <td colSpan={2}><center><h1 style={{color:"black"}}>Welcome User</h1></center></td>
            </tr>
            <tr>
                <td><h1 style={{color:"black"}}>Choose Topic</h1></td>
                <td><select>
                    <option>Choose</option>
                    <option>Servlet</option>
                    <option>JSP</option>
                    <option>JPA</option>
                    <option>Spring Framework</option>
                    </select></td>
            </tr>
            <tr>
                <td colSpan={2}><center><button className='btn btn-primary'>Choose Topic</button></center></td>
            </tr>
          </tbody>
        </table>
        
        
    </div>
</div>
}
export default Admin;