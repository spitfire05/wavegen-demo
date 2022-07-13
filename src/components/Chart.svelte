<script lang="ts">
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';
    import type { cfg } from 'src/types';
    import init, { Waveformf32 } from 'rust'


	export let settings: cfg;

	let canvas: any;
    let config: any;

    let chart: any;

    let wasm_init = false;

    function update(settings: cfg) {
        if (!wasm_init) {
            return;
        }
        if (settings.sample_rate <= 0) {
            return;
        }
        let wf = new Waveformf32(settings.sample_rate);
        settings.components.forEach(c => {
            if (c.frequency > 0.0) {
                switch (c.type) {
                    case "sine":
                        wf.add_sine(c.frequency, c.amplitude);
                        break;
                    case "sawtooth":
                        wf.add_sawtooth(c.frequency, c.amplitude);
                        break;
                }
            }
        });
        let labels = Array(settings.n).fill(0).map((_, idx) => idx / settings.sample_rate);
        let samples = wf.get_samples(settings.n);

        let data = {
                labels: labels,
                datasets: [
                    {
                        label: 'Waveform',
                        data: samples,
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.0
                    }
                ]
        };
        config = {
            type: 'line',
            data: data,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    // title: {
                    //     display: true,
                    //     text: 'Chart.js Line Chart'
                    // }
                }
            },
        };

        if (canvas) {
            if (chart) {
                chart.destroy();
            }
            const ctx = canvas.getContext('2d');
            // Initialize chart using default config set
            chart = new Chart(ctx, config);
        }
        
    }

    $: update(settings);
    
    onMount(async ()=> {
        await init();
        wasm_init = true;
        update(settings)
    });
</script>

<canvas bind:this={canvas} width={300} height=100% />