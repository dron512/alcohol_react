import React, { useEffect, useState } from 'react';
import { SERVER_URL } from '../../api/config';
import jwtAxios from '../../util/jwtUtil';

const RecentSearches = ({ display }) => {
  const [recentSearches, setRecentSearches] = useState([]);
  useEffect(() => {
    jwtAxios.get(`${SERVER_URL}/main/recent`)
    .then((response) => {
      setRecentSearches(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [display]);
  
  // Array of recent searches
  
  const divStyle = {
    display,
    backgroundColor: "white",
    width: "600px",
    marginLeft: "330px",
    borderRadius: "1rem"
  };

  return (
    <div style={divStyle}>
      <div style={{
        marginLeft: "-400px",
        marginTop: "1rem"
      }}></div>
      <div style={{
        marginLeft: "-440px",
      }}>
        {recentSearches.map((searchTerm, index) => (
          <div key={index} 
            style={{ fontSize: '2rem',
                   lineHeight: "4rem",
                   }}>{searchTerm.searchcontents}</div>
        ))}
      </div>
    </div>
  );
};

export default RecentSearches;