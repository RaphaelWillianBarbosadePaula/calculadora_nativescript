const { Observable } = require("@nativescript/core");

function createViewModel() {
  const viewModel = new Observable();

  viewModel.onAdd = function () {
    const num1 = parseFloat(viewModel.input1);
    const num2 = parseFloat(viewModel.input2);
    viewModel.set("result", num1 + num2);
  };

  viewModel.onSubtract = function () {
    const num1 = parseFloat(viewModel.input1);
    const num2 = parseFloat(viewModel.input2);
    viewModel.set("result", num1 - num2);
  };

  viewModel.onMultiply = function () {
    const num1 = parseFloat(viewModel.input1);
    const num2 = parseFloat(viewModel.input2);
    viewModel.set("result", num1 * num2);
  };

  viewModel.onDivide = function () {
    const num1 = parseFloat(viewModel.input1);
    const num2 = parseFloat(viewModel.input2);
    if (num2 !== 0) {
      viewModel.set("result", num1 / num2);
    } else {
      viewModel.set("result", "Erro: Divisão por zero");
    }
  };

  return viewModel;
}

exports.createViewModel = createViewModel;
