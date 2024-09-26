<script>
  import { getIndexYahoo, round } from "../utils";

  let watchlist = [{ symbol: "AAPL" }, { symbol: "GOOGL" }, { symbol: "BTC" }];
  async function fillInData() {
    for await (const index of watchlist) {
      index.data = await getIndexYahoo(index.symbol);
    }
  }
  //   watchlist.forEach(index => {
  //     index.data = await
  //   })
</script>

<section class="watchlist">
  <h2>Your Watchlist</h2>
  <table>
    <thead>
      <tr>
        <th>Symbol</th>
        <th>Name</th>
        <th>Open</th>
        <th>Change</th>
        <th>Close</th>
        <th>High</th>
        <th>Low</th>
      </tr>
    </thead>
    <tbody>
      {#await fillInData()}
        <tr><td colspan="7"><div>...loading</div></td></tr>
      {:then response}
        {#each watchlist as stock}
          <tr>
            <td>{stock.symbol}</td>
            <td>{stock.data.longName}</td>
            <td>{round(stock.data.open, 4)}</td>
            <td
              class={stock.data.previousClose > stock.data.open
                ? "positive"
                : "negative"}
            >
              {100 * round(+stock.data.previousClose / +stock.data.open - 1, 4)}
              %
            </td>
            <td>{round(stock.data.previousClose, 4)}</td>
            <td>{round(stock.data.high, 4)}</td>
            <td>{round(stock.data.low, 4)}</td>
          </tr>
        {/each}
      {:catch error}
        <tr>
          <td colspan="7">
            <div class="fetch-error-text">
              paste and access this link to your browser to trigger temporary
              access to CORS
            </div>
            <div class="fetch-error-link">
              https://cors-anywhere.herokuapp.com/https://query1.finance.yahoo.com/v8/finance/chart/AAPL
            </div>
            <div class="fetch-error-text">
              then click
              <span class="fetch-error-button">
                Request temporary access to the demo server
              </span>
            </div>
            <div class="fetch-error-text">
              then go back here and reload the page
            </div>
          </td>
        </tr>
        <!-- <tr>
          <td colspan="7">
            <div>
            </div>
          </td>
        </tr> -->
      {/await}
    </tbody>
  </table>
</section>

<style>
  .watchlist {
    margin: 0 2rem;
    padding: 2rem;
    background-color: #f9f9f9;
    border-radius: 5px;
    color: #242424;
    margin-bottom: 1rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #ccc;
  }

  .positive {
    color: green;
  }

  .positive::before {
    content: "+";
  }

  .negative {
    color: red;
  }

  table div {
    color: rgb(91, 219, 166);
  }
  table div {
    text-align: center;
    width: 100%;
  }

  .fetch-error-text {
    color: #1b1b1b;
  }
  .fetch-error-link {
    color: #000b47;
    text-decoration: underline;
  }
  .fetch-error-button {
    background-color: rgb(219, 255, 219);
    border-radius: 5px;
    padding: 0px 10px;
  }
</style>
