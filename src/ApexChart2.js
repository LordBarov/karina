import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import readXlsxFile from "read-excel-file";
class ApexChart2 extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [
                {
                    type: 'boxPlot',
                    data: [
                        {
                            x: 'Дневной САД max',
                            y: [155,
                                134,
                                160,
                                187,
                                134,
                                167,
                                172,
                                156,
                                146,
                                151,
                                181,
                                144,
                                119,
                                154,
                                163,
                                131,
                                154,
                                160,
                                168,
                                197,
                                231,
                                147,
                                129,
                                159,
                                126,
                                167,
                                149,
                                139,
                                180,
                                152,
                                134,
                                138,
                                160,
                                125,
                                126,
                                131,
                                172,
                                153,
                                186,
                                180,
                                177,
                                161,
                                136,
                                159,
                                168,
                                143,
                                141,
                                168,
                                181,
                                142,
                                199,
                                137,
                                161,
                                159,
                                175,
                                172,
                                131,
                                132,
                                136,
                                117,

                            ]
                        },
                        {
                            x: 'Дневной САД min',
                            y: [96,
                                98,
                                116,
                                132,
                                86,
                                100,
                                97,
                                107,
                                103,
                                90,
                                124,
                                109,
                                88,
                                111,
                                105,
                                83,
                                111,
                                116,
                                138,
                                117,
                                113,
                                102,
                                89,
                                112,
                                80,
                                100,
                                100,
                                100,
                                100,
                                98,
                                92,
                                91,
                                104,
                                86,
                                91,
                                95,
                                106,
                                101,
                                103,
                                100,
                                126,
                                100,
                                91,
                                112,
                                89,
                                87,
                                102,
                                138,
                                124,
                                92,
                                105,
                                99,
                                105,
                                81,
                                127,
                                106,
                                75,
                                98,
                                103,
                                84,
                            ]
                        },
                        {
                            x: 'Среднее сад день',
                            y: [115,
                                115,
                                137,
                                159,
                                108,
                                139,
                                129,
                                127,
                                124,
                                119,
                                149,
                                125,
                                103,
                                132,
                                136,
                                115,
                                132,
                                137,
                                154,
                                145,
                                151,
                                126,
                                108,
                                133,
                                109,
                                139,
                                127,
                                117,
                                137,
                                122,
                                118,
                                111,
                                129,
                                104,
                                109,
                                114,
                                143,
                                130,
                                144,
                                137,
                                147,
                                129,
                                116,
                                134,
                                121,
                                119,
                                113,
                                154,
                                149,
                                119,
                                152,
                                115,
                                138,
                                124,
                                155,
                                143,
                                105,
                                116,
                                123,
                                100,


                            ]
                        },
                        {
                            x: 'Ночной САД Max',
                            y: [164,
                                117,
                                136,
                                170,
                                116,
                                148,
                                173,
                                137,
                                136,
                                125,
                                150,
                                118,
                                149,
                                171,
                                132,
                                149,
                                136,
                                163,
                                146,
                                186,
                                131,
                                121,
                                153,
                                109,
                                148,
                                147,
                                117,
                                153,
                                126,
                                108,
                                112,
                                126,
                                124,
                                116,
                                129,
                                152,
                                143,
                                146,
                                153,
                                151,
                                117,
                                112,
                                167,
                                122,
                                128,
                                110,
                                163,
                                150,
                                126,
                                194,
                                125,
                                157,
                                118,
                                177,
                                152,
                                118,
                                116,
                                127,
                                113,

                            ]
                        }
                        ,
                        {
                            x: 'Ночной сад min',
                            y: [120,
                                94,
                                112,
                                129,
                                88,
                                122,
                                96,
                                88,
                                90,
                                101,
                                130,
                                80,
                                100,
                                145,
                                90,
                                100,
                                112,
                                114,
                                123,
                                129,
                                91,
                                93,
                                112,
                                78,
                                122,
                                122,
                                89,
                                115,
                                90,
                                85,
                                93,
                                107,
                                84,
                                73,
                                101,
                                109,
                                103,
                                114,
                                115,
                                132,
                                88,
                                89,
                                96,
                                84,
                                97,
                                89,
                                114,
                                130,
                                86,
                                147,
                                101,
                                127,
                                93,
                                138,
                                109,
                                82,
                                72,
                                107,
                                73,

                            ]
                        },
                        {
                            x: 'Ср САД ночь',
                            y: [137,
                                104,
                                127,
                                149,
                                97,
                                134,
                                129,
                                116,
                                114,
                                114,
                                140,
                                97,
                                117,
                                155,
                                113,
                                117,
                                127,
                                142,
                                136,
                                148,
                                109,
                                107,
                                136,
                                96,
                                134,
                                133,
                                107,
                                131,
                                109,
                                98,
                                101,
                                117,
                                96,
                                94,
                                112,
                                131,
                                124,
                                129,
                                131,
                                143,
                                105,
                                101,
                                115,
                                105,
                                110,
                                97,
                                142,
                                140,
                                107,
                                171,
                                118,
                                141,
                                104,
                                150,
                                131,
                                100,
                                104,
                                116,
                                92,

                            ]
                        }
                        ,
                        {
                            x: 'Степень ночного снижения САД',
                            y: [14,
                                8,
                                6,
                                10,
                                -12,
                                -3,
                                -3,
                                3,
                                9,
                                4,
                                10,
                                6,
                                8,-19,
                                9,
                                8,
                                6,
                                10,
                                3,
                                0,
                                9,
                                8,
                                5,
                                6,
                                6,
                                12,
                                -14,
                                2,
                                12,
                                8,
                                8,
                                6,
                                3,
                                14,
                                1,
                                -2,
                                12,
                                3,
                                -5,
                                8,
                                4,
                                11,
                                17,
                                9,
                                9,
                                8,
                                14,
                                2,
                                9,
                                5,
                                10,
                                4,
                                3,
                                18,
                                13,
                                14,
                                14,
                                8,

                            ]
                        },
                        {
                            x: 'Среднее пульсовое АД',
                            y: [40,
                                39,
                                46,
                                58,
                                42,
                                46,
                                47,
                                48,
                                35,
                                39,
                                74,
                                42,
                                41,
                                41,
                                56,
                                36,
                                41,
                                46,
                                61,
                                42,
                                52,
                                51,
                                44,
                                47,
                                36,
                                46,
                                62,
                                37,
                                67,
                                42,
                                41,
                                37,
                                50,
                                41,
                                29,
                                37,
                                50,
                                39,
                                52,
                                67,
                                47,
                                46,
                                33,
                                57,
                                36,
                                33,
                                33,
                                61,
                                74,
                                40,
                                79,
                                48,
                                55,
                                48,
                                50,
                                37,
                                42,
                                45,
                                33,

                            ]
                        }
                    ]
                }
            ],


            options: {
                chart: {
                    type: 'boxPlot',
                    height: 350
                },
                title: {
                    text: 'Basic BoxPlot Chart',
                    align: 'left'
                },
                plotOptions: {
                    boxPlot: {
                        colors: {
                            upper: '#5C4741',
                            lower: '#A5978B'
                        }
                    }
                }
            },
        };
    }


    render() {
        return (
            <>
                <div id="chart" >
                    <ReactApexChart options={this.state.options} series={this.state.series} type="boxPlot" height={500} />
                </div>
            </>
        );
    }
}
export default ApexChart2;