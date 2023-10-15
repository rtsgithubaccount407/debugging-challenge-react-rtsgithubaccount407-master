

    <div className="ball">
      <h1 className="count" ondoubleclick={() => alert("cant edit it")}>
        {count}
      </h1>
      <button className="increment-button" onclick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default App;
