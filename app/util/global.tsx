export const fetchPoliceApiData = async (
  crime_type: string,
  reftype: string,
  refid: string,
  year: string
) => {
  const dataArray: Array<number> = [];
  for (let i = 1; i <= 12; i++) {
    let date = `${leftPad(String(i), 2)}-${year}`;
    let formData = new FormData();
    formData.append("reftype", reftype);
    formData.append("refid", refid);
    formData.append("date", date);

    const rawResponse = await fetch(
      "https://wsvc01.police.gov.mv/mobile/olservices/getStatsByID",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await rawResponse?.json();

    console.log(data?.data);

    if (data?.data?.data) {
      data?.data?.data?.forEach((item: any) => {
        if (item?.codedetail === crime_type) {
          if (item?.cnt) {
            dataArray.push(item?.cnt);
          } else {
            dataArray.push(0);
          }
        }
      });
    } else {
      dataArray.push(0);
    }
  }
  console.log(dataArray);
  return dataArray;
};

const leftPad = (number: string, targetLength: number) => {
  var output = number + "";
  while (output.length < targetLength) {
    output = "0" + output;
  }
  return output;
};

export function random_rgba() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return (
    "rgba(" +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    r().toFixed(1) +
    ")"
  );
}
