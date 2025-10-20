module.exports = {
  sectionFromRoll: function (roll) {
    const num = parseInt(roll.replace(/^0+/, ''));
    if ((num >= 160123737001 && num <= 160123737070) || (num >= 160123737301 && num <= 160123737307)) return "IT-1";
    if ((num >= 160123737071 && num <= 160123737137) || (num >= 160123737308 && num <= 160123737314)) return "IT-2";
    if ((num >= 160123737138 && num <= 160123737220) || (num >= 160123737315 && num <= 160123737321)) return "IT-3";
    return "";
  }
};
