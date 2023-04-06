<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="text-white bg-white" style="padding: 10px;" glossy bordered>
      <q-toolbar>

        <q-toolbar-title>
          <q-img src="../assets/sekela.png" style="width:190px; height: 63px" />
        </q-toolbar-title>
        <q-btn
          dense
          flat
          round
          class="bg-primary text-secondary float-right q-ma-lg"
          @click="drawer = !drawer"
          icon="menu"
          aria-label="Open menu"
          v-if="$q.screen.width < 768"
        />
        <div v-if="$q.screen.width > 768">
          normal menu
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer
      side="right"
      v-model="drawer"
      show-if-above
      content-class="bg-grey-1"
      bordered
      v-if="$q.screen.width < 768"
    >
      <q-list>
        <q-item>
          <q-item-section>
            <q-item-label>
              Menu Item 1
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-item-label>
              Menu Item 2
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-item-label>
              <login-component />
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-page>
        <div class="row q-mb-lg">
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6"
               style="margin-top:150px !important;margin-bottom: 20px;">
            <div
              data-aos="fade-up-right"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1500"
              style="margin-left: 50px"
            >
              <h1 class="text-primary">Sek&apos;ela SIMS</h1>
              <h6>
                Sek'ela SIMS (Student/School Information Management System) is
                designed to Schools at all level, with friendly approach, to
                organize, manage and control your day to day activity, produce
                reports and aggregated statistical data. It is easy to use, and
                generate information reacquired by all stakeholders.
              </h6>
              <login-component />
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div
              data-aos="fade-up"
              data-aos-offset="600"
              data-aos-duration="1500"
            >
              <q-img src="../assets/images/herobgimg.png" :fit="'scale-down'" :ratio="4/3" />
            </div>
          </div>
        </div>

        <section id="#about" class="about q-mt-lg" style="margin-top: 100px">
          <div class="feature q-mt-lg">
            <div class="row q-mt-lg">
              <div
                class="col q-mt-lg"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                <h1 class="text-primary">About Us</h1>
                <h6>
                  Support Education (SupEd ) is dedicated to supporting
                  Education through digital technology to achieve equity,
                  equality, and inclusive education for all students in
                  developing countries.
                </h6>
                <div class="pic">
                  <img
                    class="img-fluid"
                    src="../assets/images/schools-mana.svg"
                    width="446px"
                    height="308px"
                    alt=""
                  />
                </div>
              </div>
              <div class="col">
                <ul>
                  <div
                    class="list-group-item"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div
                      class="d-inline-flex align-items-center justify-content-center text-white rounded m-1 me-2"
                      style="
                        background-color: #ffca3d;
                        width: 40px;
                        height: 40px;
                      "
                    >
                      <i class="fas fa-check-circle fa-lg"></i>
                    </div>

                    <strong> Academic administration</strong>
                    <p>
                      easily manage the annual school plan and education system
                      in one platform
                    </p>
                  </div>
                  <div
                    class="list-group-item"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div
                      class="d-inline-flex align-items-center justify-content-center text-white rounded m-1 me-2"
                      style="
                        background-color: #ffca3d;
                        width: 40px;
                        height: 40px;
                      "
                    >
                      <i class="fas fa-check-circle fa-lg"></i>
                    </div>

                    <strong> Report Generation</strong>
                    <p>
                      present information from raw data using numbers, tables,
                      and figures
                    </p>
                  </div>
                  <div
                    class="list-group-item"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <div
                      class="d-inline-flex align-items-center justify-content-center text-white rounded m-1 me-2"
                      style="
                        background-color: #ffca3d;
                        width: 40px;
                        height: 40px;
                      "
                    >
                      <i class="fas fa-check-circle fa-lg"></i>
                    </div>

                    <strong> All Data in One Place</strong>
                    <p>
                      find student information, staff members, subjects, class
                      schedules, and assessments & results accessible in one
                      system
                    </p>
                  </div>
                  <div
                    class="list-group-item"
                    data-aos="fade-up"
                    data-aos-delay="800"
                  >
                    <div
                      class="d-inline-flex align-items-center justify-content-center text-white rounded m-1 me-2"
                      style="
                        background-color: #ffca3d;
                        width: 40px;
                        height: 40px;
                      "
                    >
                      <i class="fas fa-check-circle fa-lg"></i>
                    </div>

                    <strong> Enhances Communication</strong>
                    <p>
                      enhance communication between the school, students, and
                      parents without time and place barriers
                    </p>
                  </div>
                  <div
                    class="list-group-item"
                    data-aos="fade-up"
                    data-aos-delay="1000"
                  >
                    <div
                      class="d-inline-flex align-items-center justify-content-center text-white rounded m-1 me-2"
                      style="
                        background-color: #ffca3d;
                        width: 40px;
                        height: 40px;
                      "
                    >
                      <i class="fas fa-check-circle fa-lg"></i>
                    </div>

                    <strong> Improves Work Efficiency</strong>
                    <p>
                      better performance by creating an efficient and effective
                      work process
                    </p>
                  </div>
                  <div
                    class="list-group-item"
                    data-aos="fade-up"
                    data-aos-delay="1200"
                  >
                    <div
                      class="d-inline-flex align-items-center justify-content-center text-white rounded m-1 me-2"
                      style="
                        background-color: #ffca3d;
                        width: 40px;
                        height: 40px;
                      "
                    >
                      <i class="fas fa-check-circle fa-lg"></i>
                    </div>

                    <strong> Integrate with other system </strong>
                    <p>
                      Our system reduce the challenge and extra investment on
                      implementing new or old software, by integrating with most
                      available software's.
                    </p>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="why">
          <div style="background-color: #f9f4e7; margin-top: 45px">
            <br /><br />
            <h1 data-aos="fade-up" data-aos-delay="100" class="why-h1">
              Why Sek'ela SIMS
            </h1>
            <p data-aos="fade-up" data-aos-delay="200" class="why-p">
              Sek'ela SIMS is the right choice for your school in many
              ways.
            </p>

            <div class="why-row row">
              <div class="why-box col" data-aos="fade-up" data-aos-delay="400">
                <h2>Simple & easy to use</h2>
                <p>
                  Sek&apos;ela is developed with ease of usability in mind. The
                  system has a customizable dashboard, modest configuration,
                  interactive interface design, advanced searching & filtering,
                  and advanced reporting
                </p>
                <h2>Cloud storage</h2>
                <p>
                  An efficient cloud-hosted SIMS has a flexible architecture
                  with a greater amount of personalization and configuration
                  options. The ultra-security feature will eliminate all flaws
                  of the manual system and offer you a tightly secured system
                  for storing student data. Institutional heads get deeper
                  insights, into the students’ progression, academic planner,
                  courses, etc..
                </p>
                <h2>24 / 7 services delivery.</h2>
                <p>
                  No service gap, for any level of maintenance. Our maintenance
                  is different from production server so as to remove any
                  service gap. Our weekly update will incorporate all bug fixes,
                  maintenance and new futures with out interruption to the
                  actual server.
                </p>
              </div>

              <div class="why-box col">
                <q-img src="../assets/images/why_sekela.jpg" />
              </div>
              <div class="why-box col" data-aos="fade-up" data-aos-delay="600">
                <h2>Simple to Customize</h2>
                <p>
                  Sek&apos;ela is in-house-made software. Our expert team is
                  ready to incorporate any system customization requests from
                  clients
                </p>
                <h2>Continuously updating</h2>
                <p>
                  We are working steadily to deliver up-to-date solutions with
                  version releases to improve functionality, usability, and
                  security. The development of Sek'ela SIMS is continuous and
                  incremental, adding new features to accommodate new demands
                </p>
                <h2>Online Learning Management system</h2>
                <p>
                  (On demand) Sek'ela SIMS can be integrated with our LMS to
                  enable learning with no time and place conditions. Teachers
                  can share course materials and references digitally using the
                  system, so that students can learn or access the teaching
                  materials outside the school using various digital device.
                </p>
              </div>
            </div>

            <!-- How does Section-->

            <div class="wrapper" data-aos="fade-up">
              <h1 data-aos="fade-up" data-aos-delay="200">
                How Does Sek&apos;ela SIMS Helps <br />
                Your Business?
              </h1>
              <div class="content-box" data-aos="fade-up">
                <div class="card" data-aos="fade-up" data-aos-delay="200">
                  <h2>Less Paperwork</h2>
                  <p>
                    Sek&apos;ela will manage record-keeping using the system and
                    easily structure and access data. The system will eliminate
                    tedious paperwork by replacing it with an
                    information-keeping system.
                  </p>
                </div>
                <div class="card" data-aos="fade-up" data-aos-delay="400">
                  <h2>Management</h2>
                  <p>
                    Sek&apos;ela SIMS will enable you to manage your school
                    activities in various ways. You will plan the academic year,
                    define tasks and activities, organize and structure data,
                    and track work processes using the system. In addition, the
                    platform will help you view and control available branches
                    from one place
                  </p>
                </div>
                <div class="card" data-aos="fade-up" data-aos-delay="600">
                  <h2>Enhanced Communication</h2>
                  <p>
                    Sek&apos;ela SIMS will ease communication between the school
                    people, students, and parents. Email, SMS, and system
                    notifications will soothe information delivery at any time
                    and place.
                  </p>
                </div>
                <div class="card" data-aos="fade-up" data-aos-delay="800">
                  <h2>Efficient Work Process</h2>
                  <p>
                    The management of activities and tasks interrelated on one
                    platform allows effective & efficient workflow. That will
                    improve the teaching-learning experience, speed up
                    processes, enhance communication, and handle failures and
                    inconveniences easily
                  </p>
                </div>
                <div class="card" data-aos="fade-up" data-aos-delay="1000">
                  <h2>Timely Decision Making</h2>
                  <p>
                    Sek&apos;ela SIMS generate reports that will summarize all
                    your school data. Accessible reports will help you to make
                    timely and convenient decisions. These reports will enable
                    you to perceive strengths and weaknesses at your institute,
                    which will help to plan strategies and design directions for
                    better performance
                  </p>
                </div>
                <div class="card" data-aos="fade-up" data-aos-delay="1200">
                  <h2>Saves Time and Money</h2>
                  <p>
                    With Sek'ela SIMS, information is a single click away to
                    save your time, and has different option to fit to your
                    budget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="feature">
          <h1 class="acc-h1" data-aos="fade-up" data-aos-offset="100">
            Why Sek’ela is the Exact Fit for Your SIMS Need?
          </h1>
          <p class="acc-p" data-aos="fade-up" data-aos-offset="200">
            Sek’ela SIMS’s rich features will change your experience at the
            academic and business level. The system will enable you to perform
            academic tasks with a user-friendly interface and collaborative
            features. It integrate with LMS for schools to cary out online or
            blended learning.
          </p>

          <div class="acc-wrappers row">
            <div class="acc-boxs col" data-aos="fade-up" data-aos-offset="200">
              <details
                style="box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25)"
                open
              >
                <summary>Branch Managements</summary>
                <div class="afters"></div>

                <p>
                  Creating school branches and assigning administrators for each
                  branch to manage activities and staff members. The system
                  enables adding buildings, floors, and schools at a specific
                  branch that are later assigned for activities and learning
                  classes.
                </p>
              </details>
              <details style="box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25)">
                <summary>Security and User management</summary>
                <div class="afters"></div>

                <p>
                  Data access credential is available at different level. Mainly
                  Central, School, Teachers, Student, and parents, with
                  restricted access to specific information only related to the
                  user. Customization based on the school policy and
                  requirements is also available.
                </p>
              </details>
              <details style="box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25)">
                <summary>Administration</summary>
                <div class="afters"></div>

                <p>
                  - For administration, it is a simple integration solution that
                  automates all day-to-day activities bringing efficiency to the
                  business processes.<br /><br />
                  - For teachers, it is a savior so that they can concentrate on
                  academic tasks rather than time-consuming administrative
                  responsibilities.<br /><br />
                  - For students, it works as a one-stop platform where they can
                  access updated information in real-time in one place.<br /><br />
                  - For parents, the student management system works as a
                  reliable and handy platform where they can know the real-time
                  updates about activities happening in the schools.
                </p>
              </details>
              <details style="box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25)">
                <summary>Academic adminstration</summary>
                <div class="afters"></div>

                <p>
                  The system enables academic year and semester planning. It
                  allows the creation of Grades & Sections and enrollment of
                  Students & Teachers in Subjects. It also has Shift management
                  to manage Periods.
                </p>
              </details>
            </div>
            <div class="acc-boxs col" data-aos="fade-up" data-aos-offset="200">
              <details
                style="box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25)"
                open
              >
                <summary>Schedule and curriculum</summary>
                <div class="afters"></div>

                <p>
                  scheduling module permits setting policy for Teacher
                  allocation for specific Classes & Subjects. The scheduling is
                  performed automatically by the system.
                </p>
              </details>
              <details style="box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25)">
                <summary>Track and manage Attendance</summary>
                <div class="afters"></div>

                <p>
                  The Sek’la yet another feature is to maintain student
                  attendance securely and generate related on-demand reports for
                  various stakeholders. This feature helps Schools minimize
                  proxies and paperwork. With instant automated SMS and email
                  alerts triggered about student absenteeism, parents can stay
                  vigilant over their wards' performance.
                </p>
              </details>
              <details style="box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25)">
                <summary>Automates grades and transcripts</summary>
                <div class="afters"></div>

                <p>
                  A typical Grade book automation in Sek’la offers easy access
                  to Branches, students, and parents to apply and track the
                  same. The option allows stakeholders involved to send grades
                  and transcripts to any destination in just a few clicks,
                  thereby improving the service and convenience to students and
                  Parents. With customization options, whenever you need
                  different grading system, the program can be configured to fit
                  all your needs..
                </p>
              </details>
              <details style="box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25)">
                <summary>Powerful Reporting</summary>
                <div class="afters"></div>

                <p>
                  Structured data can be an asset for any organization.
                  Incorporated analytical tools can help management to make
                  their decisions better and more comprehensive. A single glance
                  at the dashboard can give the desired inputs for
                  decision-making. The filters and sorting can help end-users to
                  view data as per the requirements. Our long experience in this
                  field helps institutes to make a predictive analysis about
                  students’ behavior also. It also includes highly customization
                  of reports based on school policy and requirements .
                </p>
              </details>
            </div>
            <div class="acc-boxs col" data-aos="fade-up" data-aos-offset="300">
              <details
                style="box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25)"
                open
              >
                <summary>Language customization</summary>
                <div class="afters"></div>

                <p>
                  English is the default language of the system. In addition,
                  Amharic and Afan Oromo are included in the system.
                </p>
              </details>
              <details style="box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25)">
                <summary>LMS and Online Learning</summary>
                <div class="afters"></div>

                <p>
                  Demand Based integrated Learning Management System (LMS) is an
                  online integrated software used for creating, delivering,
                  tracking, and reporting educational courses and outcomes. It
                  can be used to support traditional face-to-face instruction,
                  as well as blended/hybrid and distance learning environments.
                </p>
              </details>
              <details style="box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25)">
                <summary>Instant alerts and notifications</summary>
                <div class="afters"></div>
                <p>
                  Sek’la comes with the ability to either send mass
                  notifications or messages individually with simple
                  configurations. Educational institutions can send important
                  notices and announcements using the robust communication
                  system which enables them to send notifications and alerts to
                  students, teachers, staff, and parents via email, push
                  notification, and sms.
                </p>
              </details>
              <details style="box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25)">
                <summary>Instructional Design</summary>
                <div class="afters"></div>
                <p>
                  We will offer Instructional design tainting on your demand, so
                  as to help you in creation of instructional materials. This
                  training goes beyond simply creating teaching materials, it
                  carefully considers how students learn and what materials and
                  methods will most effectively help individuals/ Students
                  achieve their academic goals. .
                </p>
              </details>
            </div>
          </div>
        </section>
        <h1
          class="value-h1 text-primary"
          data-aos="fade-up"
          data-aos-offset="100"
          style="
            margin: 5px;
            text-align: center;
            font-size: 50px;
            font-weight: 900;
          "
        >
          Our value-added services
        </h1>
        <div class="value-row">
          <div
            class="value-box"
            style="
             background-image: url('../assets/images/value_add.jpg');
             background-position:  center;
             background-size:cover;
        "
            data-aos="fade-up-right"
            data-aos-offset="100"
          >
            <q-img src="../assets/images/value_add.jpg" alt="" />
          </div>
          <div class="value-box">
            <div data-aos="fade-up" data-aos-delay="200">
              <h2>Free Trial Period</h2>
              <p>ensure it’s the right system for your school</p>
            </div>

            <div data-aos="fade-up" data-aos-delay="400">
              <h2>Data Management plans</h2>
              <p>Plans Data structuring and encoding packages before launch</p>
            </div>

            <div data-aos="fade-up" data-aos-delay="600">
              <h2>Fast Customization</h2>
              <p>branding, additional feature integration, and more</p>
            </div>

            <div data-aos="fade-up" data-aos-delay="800">
              <h2>Continuous Support</h2>
              <p>you are backed up with 24/7 support</p>
            </div>
          </div>
          <div class="value-box">
            <div data-aos="fade-up" data-aos-delay="1000">
              <h2>Training</h2>
              <p>we want you to use the system at optimal</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="1200">
              <h2>High-speed Server Guarantee</h2>
              <p>hosting at a secure server, with the right resource</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="1400">
              <h2>Quick Maintenance Warranty</h2>
              <p>a team that is ready to fix any error or failures</p>
            </div>
          </div>
        </div>

        <!-- How to get Sekela Section -->
        <section id="pricing" style="padding-top: 65px; margin-top: -65px">
          <div class="get-wrapper">
            <h1>
              How Does to get Sek&apos;ela SIMS <br />
              for your School?
            </h1>
            <p>
              We provided with options to setup SEK'ELA SIMS for your school as
              your preference
            </p>
            <div class="get-content-box">
              <div
                class="get-card"
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
              >
                <div class="service-icon">
                  <i class="fa-solid fa-keyboard"></i>
                </div>
                <h2 class="get-h2">Subscription <br />License Plan</h2>
                <p class="get-p">
                  A hosted Software as a Service (SaaS) Subscription Plan with
                  monthly, quarterly, or yearly payments will be provided to you
                  with automatic updates and maintenance
                </p>
              </div>
              <div
                class="get-card"
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
              >
                <div class="service-icon">
                  <i class="fa-solid fa-keyboard"></i>
                </div>
                <h2 class="get-h2">Perpetual <br />License Plan</h2>
                <p class="get-p">
                  In Perpetual License , It is a one-time payment for the system
                  that doesn't expire. Based on school demand, there is
                  subscription option for support, maintenance, update futures
                  and hosting services.
                </p>
              </div>
            </div>
          </div>
        </section>
        <!-- Additional Services section -->
        <div class="add-wrapper">
          <h1 style="background-color: transparent" data-aos="fade-up">
            Additional Services
          </h1>
          <div class="add-content-box" style="background-color: transparent">
            <div
              class="add-card"
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
            >
              <div class="add-icon">
                <i class="fa-solid fa-database"></i>
              </div>
              <h2>DATA MANAGEMENT</h2>
              <p>Data structuring and entry</p>
            </div>
            <div
              class="add-card"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
            >
              <div class="add-icon">
                <i class="fa-solid fa-gear"></i>
              </div>

              <h2>CUSTOMIZATION</h2>
              <p>Branding and feature integration</p>
            </div>
            <div
              class="add-card"
              data-aos="fade-right"
              data-aos-offset="400"
              data-aos-easing="ease-in-sine"
            >
              <div class="add-icon">
                <i class="fa-solid fa-server"></i>
              </div>

              <h2>HOSTING</h2>
              <p></p>
            </div>
          </div>
        </div>
        <!-- Contact Section -->

        <div class="contact-row">
          <div class="left">
            <div class="content">
              <h1>Get in Touch With Us</h1>
              <p>
                Sek’ela SIMS brings a source of education technology to Ethiopia
                that reaches as many schools as possible. It will create
                satisfied clients, happy parents, and youths that shine with
                hope and positivity
              </p>
              <q-btn
                href="#"
                tag="a"
                class="bg-primary text-secondary q-pa-3"
                label="CONTACT US"
              />
            </div>
          </div>
          <div class="right">
            <q-img src="../assets/images/contact.jpg" alt="" />
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import LoginComponent from "pages/auth/login.vue";
import AOS from "aos";
export default defineComponent({
  name: "WelcomePage",
  components: { LoginComponent },
  data() {
    return {
      drawer: false
    };
  },
  methods: {},
  mounted() {
    AOS.init();
  }
});
</script>
<style scoped>
@import url("../css/accordion.css");
@import url("../css/welcome.css");
@import url("https://unpkg.com/aos@2.3.1/dist/aos.css");

body {
  font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
</style>
