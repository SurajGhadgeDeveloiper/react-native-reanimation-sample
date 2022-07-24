export function getAnimationList() {
  var viewModel = [];

  viewModel.push({
    index: 1,
    label: 'Basic Animation',
  });
  viewModel.push({
    index: 2,
    label: 'Sample Screens',
  });

  return viewModel;
}

export function getBasicAnimationList() {
  var viewModel = [];

  viewModel.push({
    index: 1,
    label: 'Opacity',
  });
  viewModel.push({
    index: 2,
    label: 'Scale',
  });
  viewModel.push({
    index: 3,
    label: 'Transform',
  });

  return viewModel;
}
