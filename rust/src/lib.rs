use wasm_bindgen::prelude::wasm_bindgen;
use wavegen::{Waveform, sine, dc_bias, sawtooth};

#[wasm_bindgen]
pub struct Waveformf32 {
    inner: Waveform<f32>
}

#[wasm_bindgen]
extern "C" {
    // Use `js_namespace` here to bind `console.log(..)` instead of just
    // `log(..)`
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
impl Waveformf32 {

    #[wasm_bindgen(constructor)]
    pub fn new(sample_rate: f64) -> Self {
        let wf = Waveform::<f32>::new(sample_rate);

        log(format!("sample_rate: {}", sample_rate).as_str());
        Waveformf32 { inner: wf }
    }

    pub fn add_sine(&mut self, frequency: f64, amplitude: f64) {
        self.inner.add_component(sine!(frequency, amplitude));
    }

    pub fn add_sawtooth(&mut self, frequency: f64, amplitude: f64) {
        self.inner.add_component(sawtooth!(frequency, amplitude));
    }

    pub fn get_samples(&self, n: usize) -> Vec<f32> {
        self.inner.iter().take(n).collect()
    }
}
