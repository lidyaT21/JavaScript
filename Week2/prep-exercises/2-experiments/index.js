"use strict";

function runExperiment(sampleSize) {
  const valueCounts = [0, 0, 0, 0, 0, 0];

  for (let i = 0; i < sampleSize; i++) {
    let randomNumber = Math.floor(Math.random() * 6 + 1);
    valueCounts[randomNumber - 1] += 1;
  }

  const results = [];

  for (let count of valueCounts) {
    let percentage = (count / sampleSize) * 100;
    results.push(percentage.toFixed(2));
  }

  return results;
}

function main() {
  const sampleSizes = [100, 1000, 1000000];
  for (let sampleSize of sampleSizes) {
    let result = runExperiment(sampleSize);
    console.log(result, sampleSize);
  }
}

main();
