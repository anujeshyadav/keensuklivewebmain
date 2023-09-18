import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
// import logo from "../../../../assets/img/logo/paravilogo.jpeg";
// import signature from "../../../../assets/img/logo/signature.png";

const styles = StyleSheet.create({
  page: {
    // flexDirection: "row",
    // backgroundColor: "#E4E4E4",
    fontFamily: "Helvetica",
    padding: 30,
  },
  header: {
    fontSize: "8px",
    marginTop: "1px",
    marginBottom: "2px",
  },
  GSTIN: {
    fontSize: "10px",
    fontWeight: "bold",
    marginTop: "1px",
    marginBottom: "2px",
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  customername: {
    fontSize: 14,
    marginBottom: 8,
  },
  image: {
    width: 70,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    borderBottomStyle: "solid",
    padding: 5,
  },
  itemName: {
    flex: 1,
  },
  itemQuantity: {
    flex: 1,
  },
  itemPrice: {
    flex: 1,
  },
  total: {
    marginTop: 20,
    fontSize: 15,
  },
});

const POInVoice = ({ invoiceData }) => {
  const { items, customerName, date, total } = invoiceData;
  console.log(invoiceData);

  return (
    <>
      <Document>
        <Page size="A4" style={styles.page}>
          <View>
            <View
              style={{
                flexDirection: "row",
                border: "1px solid black",
                height: "100px",
              }}
            >
              <Image
                style={{ width: "200px", padding: "25px 10px" }}
                // src={logo}
              ></Image>
              <View style={{ padding: "10px" }}>
                <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
                  PRAVARI CORPORATE MANAGEMENT SERVICES PVT. LTD.
                </Text>

                <Text
                  style={{
                    fontSize: "8px",
                    marginTop: "5px",
                    marginBottom: "2px",
                  }}
                >
                  ROOM 7,A-WING,Shree Datta Digambar CHS Ltd.
                </Text>
                <Text style={styles.header}>
                  Guru Datta Mandir Road ,Gaurishankarwadi No. 1{" "}
                </Text>
                <Text style={styles.header}>
                  Opp. Yashomandir,Pant Nagar ,Ghatkopar East,
                </Text>
                <Text style={styles.header}>
                  Mumbai,Maharastra, 400075. india
                </Text>
                <Text style={styles.GSTIN}>GSTIN: 27AAHCP2196E1ZB</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                borderBottom: "1px solid black",
                borderRight: "1px solid black",
                borderLeft: "1px solid black",
                height: "70px",
              }}
            >
              <View
                style={{
                  width: "50%",
                  padding: "10px 10px",
                  borderRight: "1px solid black",
                }}
              >
                <View style={{ flexDirection: "row", paddingBottom: "3px" }}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: "bold",
                      width: "50%",
                    }}
                  >
                    Receipt No.
                  </Text>{" "}
                  <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
                    : order_id
                  </Text>
                </View>
                <View style={{ flexDirection: "row", paddingBottom: "3px" }}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: "bold",
                      width: "50%",
                    }}
                  >
                    Receipt Date.
                  </Text>{" "}
                  <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
                    : delivery_date
                  </Text>
                </View>
                <View style={{ flexDirection: "row", paddingBottom: "3px" }}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: "bold",
                      width: "50%",
                    }}
                  >
                    Term
                  </Text>{" "}
                  <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
                    : Due on Receipt
                  </Text>
                </View>
              </View>

              <View style={{ padding: "10px", width: "50%" }}>
                <View style={{ flexDirection: "row", paddingBottom: "3px" }}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: "bold",
                      width: "50%",
                    }}
                  >
                    Place of Supply
                  </Text>{" "}
                  <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
                    : Tamilnadu
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#b4b6baad",
                borderBottom: "1px solid black",
                borderRight: "1px solid black",
                borderLeft: "1px solid black",
                height: "20px",
              }}
            >
              <View
                style={{
                  width: "50%",
                  padding: "2px 2px",
                  borderRight: "1px solid black",
                }}
              >
                <View
                  style={{ flexDirection: "row", paddingBottom: "3px 3px" }}
                >
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: "1000",
                      marginLeft: "5px",
                      width: "50%",
                    }}
                  >
                    Bill To
                  </Text>
                </View>
              </View>

              <View style={{ padding: "2px", width: "50%" }}>
                <View style={{ flexDirection: "row", paddingBottom: "3px" }}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: "bold",
                      marginLeft: "5px",
                      width: "50%",
                    }}
                  >
                    Ship to
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                borderBottom: "1px solid black",
                borderRight: "1px solid black",
                borderLeft: "1px solid black",
                height: "90px",
              }}
            >
              <View
                style={{
                  width: "50%",
                  padding: "10px 10px",
                  borderRight: "1px solid black",
                }}
              >
                <View style={{ flexDirection: "", paddingBottom: "3px" }}>
                  <Text
                    style={{
                      fontSize: "13px",
                      fontWeight: "bold",
                    }}
                  >
                    IndusInd Bank
                  </Text>{" "}
                  <Text
                    style={{
                      fontSize: "10px",
                      width: "45%",
                      fontWeight: "bold",
                    }}
                  >
                    8Th Floor Tower,1 one India Bulls Centers, 841, S B marg
                    ,Mumbai-400013
                  </Text>{" "}
                </View>
              </View>

              <View style={{ padding: "10px", width: "50%" }}>
                <View style={{ flexDirection: "", paddingBottom: "3px" }}>
                  <Text
                    style={{
                      fontSize: "13px",
                      fontWeight: "bold",
                    }}
                  >
                    IndusInd Bank
                  </Text>{" "}
                  <Text
                    style={{
                      fontSize: "10px",
                      width: "45%",
                      fontWeight: "bold",
                    }}
                  >
                    8Th Floor Tower,1 one India Bulls Centers, 841, S B marg
                    ,Mumbai-400013
                  </Text>{" "}
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                borderBottom: "1px solid black",
                borderRight: "1px solid black",
                borderLeft: "1px solid black",
                height: "50px",
              }}
            >
              <View
                style={{
                  width: "50%",
                  padding: "2px 2px",
                  borderRight: "1px solid black",
                }}
              >
                <View
                  style={{ flexDirection: "row", paddingBottom: "3px 3px" }}
                >
                  <Text
                    style={{
                      fontSize: "13px",
                      fontWeight: "1000",
                      padding: "12px 12px",

                      width: "50%",
                    }}
                  >
                    Client Code :
                  </Text>
                </View>
              </View>

              <View style={{ padding: "2px", width: "50%" }}>
                <View style={{ flexDirection: "row", paddingBottom: "3px" }}>
                  <Text
                    style={{
                      fontSize: "13px",
                      fontWeight: "1000",
                      padding: "12px 12px",
                      width: "50%",
                    }}
                  >
                    User Code :
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                backgroundColor: "black",
                borderBottom: "1px solid black",
                borderRight: "1px solid black",
                borderLeft: "1px solid black",
                height: "23px",
              }}
            >
              <View
                style={{
                  width: "5%",
                  padding: "5px 2px",
                  borderRight: "1px solid black",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}
                >
                  #
                </Text>
              </View>

              <View
                style={{
                  width: "10%",
                  padding: "5px 2px",

                  borderRight: "1px solid black",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",
                    fontWeight: "1000",
                    color: "white",

                    marginLeft: "5px",
                  }}
                >
                  PO No.
                </Text>
              </View>
              <View
                style={{
                  width: "13%",
                  padding: "5px 2px",

                  borderRight: "1px solid black",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}
                >
                  Client Code
                </Text>
              </View>
              <View
                style={{
                  width: "13%",
                  padding: "5px 2px",

                  borderRight: "1px solid black",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}
                >
                  State name
                </Text>
              </View>
              <View
                style={{
                  width: "15%",
                  padding: "5px 2px",

                  borderRight: "1px solid black",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}
                >
                  Product Name
                </Text>
              </View>
              <View
                style={{
                  width: "12%",
                  padding: "5px 2px",

                  borderRight: "1px solid black",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}
                >
                  HSN / SAC
                </Text>
              </View>
              <View
                style={{
                  width: "12%",
                  marginRight: "2px",
                  padding: "5px 2px",
                  borderRight: "1px solid black",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}
                >
                  Qty
                </Text>
              </View>
              <View
                style={{
                  width: "12%",
                  marginRight: "2px",
                  padding: "5px 2px",
                  borderRight: "1px solid black",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}
                >
                  Price
                </Text>
              </View>
              <View
                style={{
                  // width: "15%",
                  marginRight: "2px",
                  padding: "5px 2px",
                  borderRight: "1px solid black",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}
                >
                  Amount
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",

                borderBottom: "1px solid black",
                borderRight: "1px solid black",
                borderLeft: "1px solid black",
                height: "50px",
              }}
            >
              <View
                style={{
                  width: "5%",
                  padding: "5px 2px",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",
                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}
                >
                  1
                </Text>
              </View>
              <View
                style={{
                  width: "10%",
                  padding: "5px 2px",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",
                    fontWeight: "1000",

                    marginLeft: "5px",
                  }}
                >
                  {/* {invoiceData?.title} */}
                  PO123
                </Text>
              </View>
              <View
                style={{
                  width: "13%",
                  padding: "5px 2px",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",

                    fontWeight: "1000",
                    // marginLeft: "5px",
                  }}
                >
                  5124588
                </Text>
              </View>
              <View
                style={{
                  width: "13%",
                  padding: "5px 2px",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",

                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}
                >
                  Madhya Pradesh
                  {/* {invoiceData?.qty} */}
                </Text>
              </View>
              <View
                style={{
                  width: "15%",
                  padding: "5px 2px",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",

                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}
                >
                  abc product
                  {/* {invoiceData?.price} */}
                </Text>
              </View>
              <View
                style={{
                  width: "12%",
                  padding: "5px 2px",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",

                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}
                >
                  {/* {invoiceData?.discountprice} */}
                  1234567
                </Text>
              </View>
              <View
                style={{
                  width: "12%",
                  marginRight: "2px",
                  padding: "5px 2px",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",

                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}
                >
                  30
                </Text>
              </View>
              <View
                style={{
                  width: "12%",
                  marginRight: "2px",
                  padding: "5px 2px",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",

                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}
                >
                  300
                </Text>
              </View>
              <View
                style={{
                  //   width: "12%",
                  marginRight: "2px",
                  padding: "5px 2px",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",

                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}
                >
                  9000
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                borderRight: "1px solid black",
                borderLeft: "1px solid black",
                borderBottom: "1px solid black",
              }}
            >
              <View
                style={{
                  width: "55%",
                  padding: "10px 10px",
                  borderRight: "1px solid black",
                }}
              >
                <View style={{ flexDirection: "", paddingBottom: "3px" }}>
                  <Text
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    Total In Words
                  </Text>{" "}
                  <Text
                    style={{
                      fontSize: "12px",
                      width: "95%",
                      fontWeight: "bold",
                    }}
                  >
                    Seven Hundread Five and sixty five Rupees only.
                  </Text>{" "}
                </View>
                <View style={{ margingTop: "50px" }}>
                  <Text style={{ fontSize: "8px", marginTop: "15px" }}>
                    Pay To: Kd Advertisement
                  </Text>
                  <Text style={{ fontSize: "8px", marginTop: "3px" }}>
                    Bank: Kotak Mahindra
                  </Text>
                  <Text style={{ fontSize: "8px", marginTop: "3px" }}>
                    A/c No.: 54623465
                  </Text>
                  <Text style={{ fontSize: "8px", marginTop: "3px" }}>
                    IFSC: Kotak0001251
                  </Text>
                  <Text style={{ fontSize: "8px", marginTop: "3px" }}>
                    IFSC: MAROLI , ANDHERI EAST
                  </Text>
                </View>
                <View
                  style={{
                    margingTop: "50px",
                    marginBottom: "40px",
                  }}
                >
                  <Text style={{ fontSize: "10px", marginTop: "15px" }}>
                    Terms and Conditions
                  </Text>
                  <Text style={{ fontSize: "9px", marginTop: "3px" }}>
                    1. Paid Amount/Payment are not refundable in any case.
                  </Text>
                  <Text style={{ fontSize: "9px", marginTop: "3px" }}>
                    2. Pay Payment under 30 days.
                  </Text>
                </View>
              </View>

              <View
                style={{
                  borderBottom: "1px solid black",
                  width: "45%",
                  height: "250px",
                }}
              >
                <View
                  style={{ height: "200px", borderBottom: "1px solid black" }}
                >
                  <View
                    style={{
                      padding: "10px",
                      height: "130px",
                      borderBottom: "1px solid black",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        gap: "10px",
                        paddingBottom: "3px",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginBottom: "6px",
                        }}
                      >
                        Sub Total
                      </Text>{" "}
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginBottom: "6px",
                        }}
                      >
                        630.00
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: "10px",
                        paddingBottom: "3px",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginBottom: "6px",
                        }}
                      >
                        CGST(12.00%)
                      </Text>{" "}
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginBottom: "6px",
                        }}
                      >
                        37.00
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: "10px",
                        paddingBottom: "3px",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginBottom: "6px",
                        }}
                      >
                        SGST(12.00%)
                      </Text>{" "}
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginBottom: "6px",
                        }}
                      >
                        37.00
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: "10px",
                        paddingBottom: "3px",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginBottom: "6px",
                        }}
                      >
                        Courier Charges
                      </Text>{" "}
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginBottom: "6px",
                        }}
                      >
                        307.00
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: "10px",
                        paddingBottom: "3px",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginBottom: "6px",
                        }}
                      >
                        Other Charges
                      </Text>{" "}
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginBottom: "6px",
                        }}
                      >
                        307.00
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: "10px",
                        paddingBottom: "3px",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: "11px",
                          fontWeight: "bold",
                          marginTop: "2px",
                        }}
                      >
                        Grand Total :
                      </Text>{" "}
                      <Text
                        style={{
                          fontSize: "11px",
                          fontWeight: "bold",
                          marginTop: "2px",
                        }}
                      >
                        710.00
                      </Text>
                    </View>
                  </View>
                </View>
                <View>
                  <View style={{ padding: "3px 3px ", height: "180px" }}>
                    <Text style={{ fontSize: "11px" }}> For</Text>
                    <Text
                      style={{
                        fontSize: "8px",
                        marginTop: "8px",
                        marginBottom: "8px",
                      }}
                    >
                      {" "}
                      PRAVARI CORPORATE MANAGEMENT SERVICES PVT. LTD.
                    </Text>
                    <View>
                      <Image
                        style={{ height: "50px", marginTop: "15px" }}
                        src={signature}
                      ></Image>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginBottom: "2px",
                        marginTop: "20px",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ fontSize: "10px" }}>
                        Authorized Signature
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </>
  );
};

export default POInVoice;
