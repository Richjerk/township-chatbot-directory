<!-- src/App.svelte -->
<script>
  let name = '';
</script>

<main>
  <h1>Township Business Directory</h1>
  <input placeholder="Enter your name" bind:value={name} />
  <p>Hello, {name || 'visitor'} 👋</p>
</main>

<style>
  main {
    font-family: sans-serif;
    padding: 2rem;
    text-align: center;
  }
</style>
