import { ChangeDetectorRef, AfterContentChecked , Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Salesdetails, InceData, AddInce, QuarData, QuarAarry, HalfYearInce, QuarInce, halfInce, HalfYearAarry, YearInce, YearInceData, YearInceArr } from '../salesdetails/salesdetails.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-editsalesdetails',
  templateUrl: './editsalesdetails.component.html',
  styleUrls: ['./editsalesdetails.component.scss']
})
export class EditsalesdetailsComponent implements OnInit, AfterContentChecked {

  salesdetailsid: any;
  salesdetails = new Salesdetails;
  data: any;
  clientArr: any;
  projectArr: any;
  subprojectsArr: any;
  bookingstatusArr: any;
  channelpartnerArr: any;
  payoutstatusArr: any;
  usersArr: any;
  teamsArr: any;
  leadsourceArr: any;
  booking_date: any;
  newDate1: any;
  newDate2: any;
  companylistArr: any;
  InceRange: any;
  business_cat: any;
  profile_score: any;
  project_id: any;
  projectData: any;
  business_cat1: any;
  business_cat2: any;
  sourcingD = new InceData;
  closingD = new InceData;
  addInce = new AddInce;
  addInceS = new AddInce;
  sourcing_emp_id: any;
  booking_dateS: any;
  booking_datesplit: any;
  yearS: any;
  monthS: any;
  sourcingData1: any;
  sourcinginceAmt: any;
  booking_date1: any;
  year: any;
  month: any;
  closingData1: any;
  closingData: any;
  closinginceAmt: any;
  gi_no_of_closing: any;
  sourcingData: any;
  eligibility_ince: any;
  business_value: any[] = [];
  business_value1: any;
  quardata = new QuarData;
  quararray = new QuarAarry;
  quarince = new QuarInce;
  dataQ = new QuarData;
  quartelyData: any;
  salesBusiness: any;
  cv_range: any;
  from_date: any;
  to_date: any;
  QuarAmt: any;
  inceamt: any;
  quarinceAmt: any;
  quarinceAmt1: any;
  halfince = new halfInce;
  half_from_date: any;
  half_to_date: any;
  half_user_id: any;
  halfyeardata: any;
  halfyeararray = new HalfYearAarry;
  halfyearInce = new HalfYearInce;
  businessHalfyear: any;
  HalfYearAmt: any;
  halfYearinceamt: any;
  halfYearAmt: any;
  halfYearAmt1: any;

  yearArr = new YearInce;
  yearincedata = new YearInceData;
  yearincearr = new YearInceArr;
  yearData: any;
  businessYear: any;
  YearInce: any;
  Yearinceamt: any;
  YearAmtInce:any;
  YearAmtInce1: any;
  constructor(
    private route: ActivatedRoute,
    private dataservice: DataService,
    private router: Router,
    private datePipe: DatePipe,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.salesdetailsid = this.route.snapshot.params.id;
    this.getSalesdetailsData();
    this.getClientData();
    this.getProjectData();
    this.getSubprojectData();
    this.getBookingstatusData();
    this.getChannelpartnerData();
    this.getPayoutstatusData();
    this.getUserData();
    this.getTeamsData();
    this.getLeadsourceData();
    this.getCompanyData();
  }

  ngAfterContentChecked() {
    this.ref.detectChanges();
}

  getSalesdetailsData() {
    this.dataservice.getOneSalesdetails(this.salesdetailsid).subscribe(res => {
      this.data = res;
      this.salesdetails = this.data;
      console.log('hi', this.salesdetails);
    })
  }

  getClientData() {
    this.dataservice.getClientList().subscribe(res => {
      this.clientArr = res;
    })
  }

  getProjectData() {
    this.dataservice.getProjectslist().subscribe(res => {
      this.projectArr = res;
    })
  }

  getSubprojectData() {
    this.dataservice.getSubprojectslist1().subscribe(res => {
      this.subprojectsArr = res;
    })
  }

  getBookingstatusData() {
    this.dataservice.getBookingstatusList().subscribe(res => {
      this.bookingstatusArr = res;
    });
  }

  getChannelpartnerData() {
    this.dataservice.getChannelpartner().subscribe(res => {
      this.channelpartnerArr = res;
    });
  }

  getPayoutstatusData() {
    this.dataservice.getPayoutstatusList().subscribe(res => {
      this.payoutstatusArr = res;
    });
  }

  getUserData() {
    this.dataservice.getUsers().subscribe(res => {
      this.usersArr = res;
    })
  }

  getTeamsData() {
    this.dataservice.getTeamslist().subscribe(res => {
      this.teamsArr = res;
    })
  }

  getLeadsourceData() {
    this.dataservice.getLeadsourceList().subscribe(res => {
      this.leadsourceArr = res;
    })
  }

  getCompanyData() {
    this.dataservice.getCompany().subscribe(res => {
      this.companylistArr = res;

    })
  }
  getIncenRange() {
    this.dataservice.getIncentiveRange().subscribe(res => {
      this.InceRange = res;
      for (var j = 0; j < this.InceRange.length; j++) {
        this.business_cat1 = this.InceRange[j].business_value;
        this.business_cat2 = this.InceRange[j].business_value1;
        this.business_cat = this.InceRange[j].business_cat;
        if ((this.business_cat1 <= this.salesdetails.business_value) && (this.salesdetails.business_value <= this.business_cat2)) {
          this.salesdetails.cv_range = this.business_cat;
        }
      }
    })
  }
  getBusinessValue1(event) {
    this.salesdetails.consideration_value = event.target.value;
    this.getBusinessValue();
  }
  getBusinessValue2(event) {
    this.salesdetails.shared_payout_value = event.target.value;
    this.getBusinessValue();
  }
  getBusinessValue3(event) {
    this.salesdetails.leadsource_id = event.target.value;
    this.getBusinessValue();
  }
  getState(event) {
    this.project_id = event.target.value;
    this.dataservice.getSubprojectslist(this.project_id).subscribe(res => {
      this.subprojectsArr = res;
      this.dataservice.getOneProjects(this.project_id).subscribe(res => {
        this.projectData = res;
        this.profile_score = this.projectData.profile_score;
        this.getBusinessValue();
      })
    });
  }
  getBusinessValue() {
    this.getIncenRange();
    if (this.profile_score == 10) {
      this.salesdetails.business_value = this.salesdetails.consideration_value;
    } else {
      this.salesdetails.business_value = (this.salesdetails.consideration_value - (this.salesdetails.shared_payout_value / this.salesdetails.payout_value) * this.salesdetails.consideration_value)
    }
    if (this.profile_score == 5) {
      if ((this.salesdetails.leadsource_id == 2) && (this.salesdetails.shared_payout_value == 0)) {
        this.salesdetails.business_value = (this.salesdetails.consideration_value / 3);
      } else {
        this.salesdetails.business_value = (this.salesdetails.consideration_value - (this.salesdetails.shared_payout_value / this.salesdetails.payout_value) * this.salesdetails.consideration_value)
      }
    }
    if (this.profile_score == 1) {
      this.salesdetails.business_value = (this.salesdetails.consideration_value - (this.salesdetails.shared_payout_value / this.salesdetails.payout_value) * this.salesdetails.consideration_value)
    }
  }
  getDate(event) {

    this.booking_date = event.target.value;
    //Add days to Issue Date      
    this.newDate1 = moment(new Date(this.booking_date)).add(45, 'd');
    this.salesdetails.BA1_amt_paid = this.datePipe.transform(new Date(this.newDate1), "yyyy-MM-dd");

    //Add days to Issue Date      
    this.newDate2 = moment(new Date(this.booking_date)).add(90, 'd');
    this.salesdetails.BA2_amt_paid = this.datePipe.transform(new Date(this.newDate2), "yyyy-MM-dd");
  }

  updateSalesdetails() {
    this.dataservice.updateSalesdetails(this.salesdetailsid, this.salesdetails).subscribe(res => {
      Swal.fire('Updated!', 'Sales Details has been updated.', 'success'); 
      this.router.navigate(['/form/salesdetailslist']);
    })
    // this.getSalesIncentive();
    // this.getSalesIncentiveC();
    this.getQuarterlyInce();
    // this.gethalfquarterly();
    this.getYearIncen();
  }

  // getSalesIncentive(){

  //   this.sourcing_emp_id = '10';
  //   this.booking_date = '2021-09-05';
  //   this.booking_dateS = this.booking_date.split("-");
  //   this.booking_datesplit = this.booking_dateS[0] + '-' + this.booking_dateS[1];
  //   this.yearS = this.booking_dateS[0];
  //   this.monthS = this.booking_dateS[1];
  //   this.sourcingD.booking_date = this.booking_date;
  //   this.sourcingD.year = this.yearS;
  //   this.sourcingD.month = this.monthS;
  //   this.sourcingD.sourcing_emp_id = '10';
  //   this.sourcingD.ince_freq = "Monthly Incentive";
  //   this.sourcingD.ince_type = 'Sourcing';

  //   this.dataservice.getInceSourcing(this.sourcingD).subscribe(res => {
  //     console.log('getInceSourcing',res);
  //     this.sourcingData1 = res;
  //     this.sourcingData = res[0];
  //     for (var i = 0; i < this.sourcingData1.length; i++) {
  //       this.business_value[i] = this.sourcingData1[i].business_value;
  //     }
  //     this.business_value1 = this.business_value.reduce((acc, cur) => acc + Number(cur), 0)

  //     console.log('getInce',this.business_value1, this.business_value);
  //     this.sourcingD.LeadCount = this.sourcingData1.length;
  //     if(this.sourcingD.LeadCount >= 3){
  //       this.eligibility_ince = "1";
  //     }else{
  //       this.eligibility_ince = "0";
  //     }
  //     console.log(this.eligibility_ince,'eligibility_ince');
  //   this.dataservice.getSourSaleInce(this.sourcingD).subscribe(res => {
  //     this.sourcinginceAmt =res;
  //     console.log(res,'hii');

  //       this.addInceS.gi_sourcing_amt = this.sourcinginceAmt;
  //       this.addInceS.gi_no_of_sourcing = this.sourcingD.LeadCount;
  //       this.addInceS.business_value = this.business_value1;
  //       this.addInceS.eligibility_ince =this.eligibility_ince;
  //       this.addInceS.ince_freq = this.sourcingD.ince_freq;
  //       this.addInceS.ince_type = this.sourcingD.ince_type;
  //       this.addInceS.YearMonth = this.booking_datesplit;
  //       this.addInceS.user_id = this.sourcingData.user_id;
  //       console.log('fetch getInceSourcing', this.addInceS);
  //       this.dataservice.updatemonthlyInce(this.addInceS).subscribe(res => {
  //         console.log('fetch add getInceSourcing', res);
  //       });
  //   });
  //   });
  // }

  // getSalesIncentiveC(){
  //   this.booking_date ='2021-09-05'
  //   this.booking_date1 = this.booking_date.split("-").map(item => item.trim());
  //   this.booking_datesplit = this.booking_date1[0] + '-' + this.booking_date1[1];
  //   this.year = this.booking_date1[0];
  //   this.month = this.booking_date1[1];
  //   this.closingD.booking_date = this.booking_date1;
  //   this.closingD.year = this.year;
  //   this.closingD.month = this.month;
  //   this.closingD.closing_emp_id = '10';
  //   this.closingD.ince_freq = "Monthly Incentive";
  //   this.closingD.ince_type = 'Closing';
  //   this.dataservice.getInceClosing(this.closingD).subscribe(res => {
  //     console.log('getInceClosing', res);
  //     this.closingData1 = res;
  //     this.closingData = res[0];
  //     this.gi_no_of_closing = this.closingData1.length;

  //     this.dataservice.getClosSaleInce(this.closingD).subscribe(res => {
  //       this.closinginceAmt =res;
  //       console.log(res,'hii');

  //     this.addInce.gi_closing_amt = this.closinginceAmt;
  //     this.addInce.gi_no_of_closing = this.gi_no_of_closing;
  //     this.addInce.ince_freq = this.closingD.ince_freq;
  //     this.addInce.ince_type = this.closingD.ince_type;
  //     this.addInce.YearMonth = this.booking_datesplit;
  //     this.addInce.user_id = this.closingData.user_id;
  //     console.log('addInce', this.addInce);
  //     this.dataservice.updatemonthlyInce2(this.addInce).subscribe(res => {
  //       console.log(' add', res);
  //     })
  //     });
  //   });
  // }

  getSalesIncentive() {

    this.sourcing_emp_id = this.salesdetails.sourcing_emp_id;
    this.booking_date = this.salesdetails.booking_date;
    this.booking_dateS = this.salesdetails.booking_date.split("-");
    this.booking_datesplit = this.booking_dateS[0] + '-' + this.booking_dateS[1];
    this.yearS = this.booking_dateS[0];
    this.monthS = this.booking_dateS[1];
    this.sourcingD.booking_date = this.booking_date;
    this.sourcingD.year = this.yearS;
    this.sourcingD.month = this.monthS;
    this.sourcingD.sourcing_emp_id = this.salesdetails.sourcing_emp_id;
    this.sourcingD.ince_freq = "Monthly Incentive";
    this.sourcingD.ince_type = 'Sourcing';

    this.dataservice.getInceSourcing(this.sourcingD).subscribe(res => {
      // console.log('getInceSourcing',res);
      this.sourcingData1 = res;
      this.sourcingData = res[0];
      for (var i = 0; i < this.sourcingData1.length; i++) {
        this.business_value[i] = this.sourcingData1[i].business_value;
      }
      this.business_value1 = this.business_value.reduce((acc, cur) => acc + Number(cur), 0)

      // console.log('getInce',this.business_value1, this.business_value);
      this.sourcingD.LeadCount = this.sourcingData1.length;
      if (this.sourcingD.LeadCount >= 3) {
        this.eligibility_ince = "1";
      } else {
        this.eligibility_ince = "0";
      }
      // console.log(this.eligibility_ince,'eligibility_ince');
      this.dataservice.getSourSaleInce(this.sourcingD).subscribe(res => {
        this.sourcinginceAmt = res;
        // console.log(res,'hii');

        this.addInceS.gi_sourcing_amt = this.sourcinginceAmt;
        this.addInceS.gi_no_of_sourcing = this.sourcingD.LeadCount;
        this.addInceS.business_value = this.business_value1;
        this.addInceS.eligibility_ince = this.eligibility_ince;
        this.addInceS.ince_freq = this.sourcingD.ince_freq;
        this.addInceS.ince_type = this.sourcingD.ince_type;
        this.addInceS.YearMonth = this.booking_datesplit;
        this.addInceS.user_id = this.sourcingData.user_id;
        // console.log('fetch getInceSourcing', this.addInceS);
        this.dataservice.updatemonthlyInce(this.addInceS).subscribe(res => {
          // console.log('fetch add getInceSourcing', res);
        });
      });
    });
  }

  getSalesIncentiveC() {
    this.booking_date1 = this.salesdetails.booking_date.split("-").map(item => item.trim());
    this.booking_datesplit = this.booking_date1[0] + '-' + this.booking_date1[1];
    this.year = this.booking_date1[0];
    this.month = this.booking_date1[1];
    this.closingD.booking_date = this.salesdetails.booking_date;
    this.closingD.year = this.year;
    this.closingD.month = this.month;
    this.closingD.closing_emp_id = this.salesdetails.closing_emp_id;
    this.closingD.ince_freq = "Monthly Incentive";
    this.closingD.ince_type = 'Closing';
    this.dataservice.getInceClosing(this.closingD).subscribe(res => {
      // console.log('getInceClosing', res);
      this.closingData1 = res;
      this.closingData = res[0];
      this.gi_no_of_closing = this.closingData1.length;

      this.dataservice.getClosSaleInce(this.closingD).subscribe(res => {
        this.closinginceAmt = res;
        // console.log(res,'hii');

        this.addInce.gi_closing_amt = this.closinginceAmt;
        this.addInce.gi_no_of_closing = this.gi_no_of_closing;
        this.addInce.ince_freq = this.closingD.ince_freq;
        this.addInce.ince_type = this.closingD.ince_type;
        this.addInce.YearMonth = this.booking_datesplit;
        this.addInce.user_id = this.closingData.user_id;
        // console.log('addInce', this.addInce);
        this.dataservice.updatemonthlyInce2(this.addInce).subscribe(res => {
          // console.log(' add', res);
        })
      });
    });
  }

  getQuarterlyInce() {

    let temp = this.salesdetails.booking_date;
    let date2 = new Date(temp);
    var currentMonth=(date2).getMonth()
    var yyyy = (date2).getFullYear()
    var start = (Math.floor(currentMonth/3)*3)+1;
    let end= start+3;
    let startDate=new Date(start+'-01-'+ yyyy);
    this.from_date = this.datePipe.transform(startDate, 'yyyy-MM-dd');
    let endDate= end>12?new Date('01-01-'+ (yyyy+1)):new Date(end+'-01-'+ (yyyy));
    endDate=new Date((endDate.getTime())-1)
    this.to_date = this.datePipe.transform(endDate, 'yyyy-MM-dd');
    console.log('startDate =', this.from_date,'endDate =', this.to_date);

    this.dataQ.from_date =this.from_date;
    this.dataQ.to_date =this.to_date;
    this.dataQ.user_id =this.salesdetails.sourcing_emp_id;
    // this.dataQ.from_date = '2021-07-01';
    // this.dataQ.to_date = '2021-09-30';
    // this.dataQ.user_id = '10';
    this.dataservice.getSourQuartely(this.dataQ).subscribe(res => {
      console.log("Quarterly Incentive", res);
      this.quartelyData = res[0];
      this.quararray.leadcount = this.quartelyData.leadcount;
      this.quararray.from_date = this.dataQ.from_date;
      this.salesBusiness = this.quartelyData.business_value / this.quartelyData.leadcount;
      console.log("Incentive", this.salesBusiness);

      this.dataservice.getIncentiveRange().subscribe(res => {
        this.InceRange = res;
        for (var j = 0; j < this.InceRange.length; j++) {
          this.business_cat1 = this.InceRange[j].business_value;
          this.business_cat2 = this.InceRange[j].business_value1;
          this.business_cat = this.InceRange[j].business_cat;
          if ((this.business_cat1 <= this.salesBusiness) && (this.salesBusiness <= this.business_cat2)) {
            this.quararray.cv_range = this.business_cat;
            console.log("Quar", this.quararray);

            if (this.quararray.leadcount >= 6) {
              console.log("hello");
              this.dataservice.getQuarData(this.quararray).subscribe(res => {
                this.QuarAmt = res[0];
                this.inceamt = Object.values(this.QuarAmt);
                this.quarinceAmt = this.inceamt;
                this.quarinceAmt1 = this.quarinceAmt[0];
                console.log("Quarterly", this.quarinceAmt1);
                this.eligibility_ince = "1";
                this.quarince.user_id = this.dataQ.user_id;
                this.quarince.from_date = this.dataQ.from_date;
                this.quarince.to_date = this.dataQ.to_date
                this.quarince.sourcing_amt = this.quarinceAmt1;
                this.quarince.eligibility_ince = this.eligibility_ince;
                this.quarince.soucring_no = this.quararray.leadcount;
                console.log("data Q", this.quarince);
                this.dataservice.updateQuartData(this.quarince).subscribe(res => {
                  console.log("Q", res);
                })
              })

            } else {
              this.eligibility_ince = "0";
              this.quarince.user_id = this.dataQ.user_id;
              this.quarince.from_date = this.dataQ.from_date;
              this.quarince.to_date = this.dataQ.to_date;
              this.quarince.eligibility_ince = this.eligibility_ince;
              this.quarince.soucring_no = this.quararray.leadcount;
              console.log("data Q", this.quarince);
              this.dataservice.updateQuartData(this.quarince).subscribe(res => {
                console.log("Q", res);
              })
            }
          }
        }
      })
    });
  }

  gethalfquarterly() {

    this.halfince.half_from_date = '2021-10-01';
    this.halfince.half_to_date = '2022-03-31';
    this.halfince.half_user_id = '11';

    this.dataservice.getSourHalfyear(this.halfince).subscribe(res => {
      console.log("half Incentive", res);
      this.halfyeardata = res[0];
      this.halfyeararray.leadcount = this.halfyeardata.leadcount;
      this.halfyeararray.half_from_date = this.halfince.half_from_date;
      this.businessHalfyear = this.halfyeardata.business_value / this.halfyeardata.leadcount;
      console.log("businessHalfyear", this.businessHalfyear);
      this.dataservice.getIncentiveRange().subscribe(res => {
        this.InceRange = res;
        for (var j = 0; j < this.InceRange.length; j++) {
          this.business_cat1 = this.InceRange[j].business_value;
          this.business_cat2 = this.InceRange[j].business_value1;
          this.business_cat = this.InceRange[j].business_cat;
          if ((this.business_cat1 <= this.businessHalfyear) && (this.businessHalfyear <= this.business_cat2)) {
            this.halfyeararray.cv_range = this.business_cat;
            console.log("cv_range", this.halfyeararray.cv_range);
            console.log("Half", this.halfyeararray);
            if (this.halfyeararray.leadcount >= 12) {
              this.dataservice.getHalfYearData(this.halfyeararray).subscribe(res => {
                console.log("Half", res);
                this.HalfYearAmt = res[0];
                this.halfYearinceamt = Object.values(this.HalfYearAmt);
                this.halfYearAmt = this.halfYearinceamt;
                this.halfYearAmt1 = this.halfYearAmt[0];
                console.log("Quarterly", this.halfYearAmt1);
                this.eligibility_ince = "1";

                this.halfyearInce.user_id = this.halfince.half_user_id;
                this.halfyearInce.from_date = this.halfince.half_from_date;
                this.halfyearInce.to_date = this.halfince.half_to_date;
                this.halfyearInce.halfsoucring_amt = this.halfYearAmt1;
                this.halfyearInce.eligibility_ince = this.eligibility_ince;
                this.halfyearInce.halfsoucring_no = this.halfyeardata.leadcount;
                console.log("data H", this.halfyearInce);
                this.dataservice.upCreHalfYearData(this.halfyearInce).subscribe(res => {
                  console.log("H", res);
                })
              })
            } else {
              this.eligibility_ince = "0";
              this.halfyearInce.user_id = this.halfince.half_user_id;
              this.halfyearInce.from_date = this.halfince.half_from_date;
              this.halfyearInce.to_date = this.halfince.half_to_date;
              this.halfyearInce.eligibility_ince = this.eligibility_ince;
              this.halfyearInce.halfsoucring_no = this.halfyeardata.leadcount;
              console.log("data H", this.halfyearInce);
              this.dataservice.upCreHalfYearData(this.halfyearInce).subscribe(res => {
                console.log("H", res);
              })
            }
          }
        }
      })
    })
  }

  getYearIncen() {

    var date =this.salesdetails.booking_date.split("-");;
    var year = date[0];
    const currentYear = year;
    const firstDay = new Date(currentYear, 0, 1);
     this.yearArr.year_from_date = this.datePipe.transform(firstDay, 'yyyy-MM-dd');
    const lastDay = new Date(currentYear, 11, 31);
    this.yearArr.year_to_date = this.datePipe.transform(lastDay, 'yyyy-MM-dd');
    console.log("yearArr", this.yearArr);

    this.yearArr.year_user_id = this.salesdetails.sourcing_emp_id;
    console.log("yearArr", this.yearArr);
    this.dataservice.getSourYearData(this.yearArr).subscribe(res => {
      console.log("year", res);
      this.yearData = res[0];
      this.yearincedata.leadcount = this.yearData.leadcount;
      this.yearincedata.business_value = this.yearData.business_value;
      this.yearincedata.year_to_date = this.yearArr.year_to_date;
      this.businessYear = this.yearincedata.business_value / this.yearincedata.leadcount;

      this.dataservice.getIncentiveRange().subscribe(res => {
        this.InceRange = res;
        for (var j = 0; j < this.InceRange.length; j++) {
          this.business_cat1 = this.InceRange[j].business_value;
          this.business_cat2 = this.InceRange[j].business_value1;
          this.business_cat = this.InceRange[j].business_cat;
          if ((this.business_cat1 <= this.businessYear) && (this.businessYear <= this.business_cat2)) {
            this.yearincedata.cv_range = this.business_cat;
            console.log("cv_range", this.yearincedata.cv_range);
          }
        }
        if (this.yearincedata.leadcount >= 20) {

          this.dataservice.getYearInceData(this.yearincedata).subscribe(res => {
            console.log("y Ince", res);
            this.YearInce = res[0];
            this.Yearinceamt = Object.values(this.YearInce);
            this.YearAmtInce = this.Yearinceamt;
            this.YearAmtInce1 = this.YearAmtInce[0];
            this.eligibility_ince = "1";
            console.log("if");

            this.yearincearr.user_id = this.yearArr.year_user_id;
            this.yearincearr.from_date = this.yearArr.year_from_date;
            this.yearincearr.to_date = this.yearArr.year_to_date;
            this.yearincearr.eligibility_ince = this.eligibility_ince;
            this.yearincearr.yearsourcing_amt = this.YearAmtInce1;
            this.yearincearr.yearsourcing_no = this.yearincedata.leadcount;
            console.log("yearincearr", this.yearincearr);
            this.dataservice.UpCreYearInce(this.yearincearr).subscribe(res => {
              console.log("Q", res);
            })
          })
        } else {
          console.log("else");
          this.eligibility_ince = "0";
          this.yearincearr.user_id = this.yearArr.year_user_id;
          this.yearincearr.from_date = this.yearArr.year_from_date;
          this.yearincearr.to_date = this.yearArr.year_to_date;
          this.yearincearr.eligibility_ince = this.eligibility_ince;
          this.yearincearr.yearsourcing_no = this.yearincedata.leadcount;
          console.log("yearincearr", this.yearincearr);
          this.dataservice.UpCreYearInce(this.yearincearr).subscribe(res => {
            console.log("Q", res);
          })
        }
      })
    })

  }


  get bmi() {
    var selectedOption = Number(this.salesdetails.consideration_value) * Number(this.salesdetails.case_payout_percentage) / 100;
    this.salesdetails.payout_value = Number(this.salesdetails.consideration_value) * Number(this.salesdetails.case_payout_percentage) / 100;
    return Number(this.salesdetails.consideration_value) * Number(this.salesdetails.case_payout_percentage) / 100;
  }

  get bmi2() {

    var ankita1 = Number(this.salesdetails.consideration_value) * Number(this.salesdetails.extra_payout_percentage) / 100;
    var selectedOption = Number(ankita1) + Number(this.salesdetails.extra_payout_value);
    this.salesdetails.net_extra_payout = Number(ankita1) + Number(this.salesdetails.extra_payout_value);
    return Number(ankita1) + Number(this.salesdetails.extra_payout_value);
  }

  get bmi3() {

    var ankita2 = Number(this.salesdetails.consideration_value) * Number(this.salesdetails.shared_payout) / 100;
    var selectedOption = Number(ankita2) + Number(this.salesdetails.shared_payout_value);
    this.salesdetails.net_shared_payout = Number(ankita2) + Number(this.salesdetails.shared_payout_value);
    return Number(ankita2) + Number(this.salesdetails.shared_payout_value);
  }

  get bmi1() {

    var ankita = Number(this.salesdetails.payout_value) - Number(this.salesdetails.net_shared_payout) + Number(this.salesdetails.net_extra_payout);
    var selectedOption = Number(this.salesdetails.payout_value) - Number(this.salesdetails.net_shared_payout) + Number(this.salesdetails.net_extra_payout);
    this.salesdetails.net_payout = Number(this.salesdetails.payout_value) - Number(this.salesdetails.net_shared_payout) + Number(this.salesdetails.net_extra_payout);
    return Number(this.salesdetails.payout_value) - Number(this.salesdetails.net_shared_payout) + Number(this.salesdetails.net_extra_payout);
  }


}
