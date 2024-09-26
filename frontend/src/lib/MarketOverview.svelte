<script>
  let marketData = [
    { name: "S&P 500", value: 4500, change: "+1.5%" },
    { name: "NASDAQ", value: 15000, change: "+0.8%" },
    { name: "DOW", value: 35000, change: "+1.1%" },
    // { name: "PST", value: 12345, change: "-1.6%" },
  ];
</script>

<section class="market-overview">
  <h2>Market Overview</h2>
  <div class="indices">
    {#each marketData as index}
      <div class="index">
        <h3>{index.name}</h3>
        <p>Value: {index.value}</p>
        <p>
          Change:
          <span class={index.change.startsWith("+") ? "positive" : "negative"}>
            {index.change}
          </span>
        </p>
      </div>
    {/each}
  </div>
</section>

<style>
  .market-overview {
    padding: 2rem;
  }

  .indices {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }

  .index {
    flex: 1;
    /* margin: 0 1rem; */
    padding: 1rem 0;
    background-color: #fff;
    color: #242424;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
  }

  .positive {
    color: green;
  }

  .negative {
    color: red;
  }
</style>
