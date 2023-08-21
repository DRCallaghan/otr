import React from 'react';

function Home() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
          <i className="fas fa-user-circle" style={{ fontSize: "96px" }}></i>
        </div>
        <p>
          osu! Tournament Ratings aims to replace the broken BWS ranking system with a functional elo/glicko ratings system for osu! standard tournaments. BWS rankings have produced incentives for users to play offline and intentionally derank their top plays in an effort to lower their ranking for tournaments and obfuscate their true skill level while playing at a far higher level within tournaments, all in an effort to win tournament badges. This creates a hostile competitive environment for both regular tournament players wishing to enjoy both the solo ladder and tournaments while playing at their best and new tournament players looking to venture into tournaments for the first time.
        </p>
        <p>
          Elo/glicko ratings solve this problem by completely separating player ranks from tournament seedings and rank restrictions. Hosts will be able to use tournament ratings to restrict who can play rather than BWS ranking, nullifying any competitive advantage gained through offline play or deranking. While no method is perfect, competitive head-to-head games around the world use variations of elo/glicko ratings to great success and have done so for decades. Unlike badges, which are static, elo/glicko ratings take into account both historical and recent performance to give as correct a picture as possible of a player's competitive skill, which is why every serious competitive game uses this system to determine its rankings. Read on for more details on our implementation.
        </p>
      </div>
    </section>
  );
}

export default Home;
