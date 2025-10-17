export const selectMenuItem = ({
  items = [],
  labelKey,
  valueKey,
  mode = "default",
}) => {
  return items.filter(Boolean).map((item) => {
    let label;
    let value;

    switch (mode) {
      case "combo":
        label =
          labelKey && valueKey ? `${item[labelKey]} - ${item[valueKey]}` : item;
        value = valueKey ? item[valueKey] : item;
        break;

      default:
        label = labelKey ? item[labelKey] : item;
        value = valueKey ? item[valueKey] : item;
        break;
    }

    return { label, value };
  });
};
