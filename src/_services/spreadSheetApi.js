class SpreadSheetApi {
  async getWorkSheetData(workSheetId) {
    const url = `https://spreadsheets.google.com/feeds/list/${workSheetId}/od6/public/values?alt=json`;
    const data = await (await fetch(url)).json();

    return data.feed.entry.map(entry => {
      let obj={};
      Object.keys(entry)
      .filter(key => key.startsWith('gsx$'))
      .forEach(key => {
        obj[key.replace('gsx$','')]=entry[key]['$t'];
      })
      return obj;
    });
  }
}

var instance = new SpreadSheetApi();
export default instance;