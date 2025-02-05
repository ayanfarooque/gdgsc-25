import 'package:flutter/material.dart';
//import 'package:fl_chart/fl_chart.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor:
          const Color.fromARGB(255, 73, 171, 176), // Background color
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(0.0, 70.0, 0.0, 0.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Top Bar
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const CircleAvatar(
                    radius: 24,
                    backgroundImage: AssetImage('assets/profile.png'),
                  ),
                  const Text(
                    "WELCOME HASHIM",
                    style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                  ),
                  IconButton(
                    icon: const Icon(Icons.notifications),
                    onPressed: () {},
                  ),
                ],
              ),

              const SizedBox(height: 10),
              Container(
                  margin: const EdgeInsets.fromLTRB(0.0, 30.0, 0.0, 0.0),
                  padding: const EdgeInsets.fromLTRB(4.0, 12.0, 4.0, 12.0),
                  decoration: BoxDecoration(
                    color: const Color.fromARGB(255, 245, 245, 221),
                    borderRadius: BorderRadius.circular(20),
                  ),
                  child: Column(
                    children: [
                      const SizedBox(
                        height: 15,
                      ),
                      Container(
                        margin: EdgeInsets.all(8.0),
                        padding: const EdgeInsets.all(12),
                        decoration: BoxDecoration(
                          color: const Color(0xFF49ABB0),
                          borderRadius: BorderRadius.circular(20),
                        ),
                        child: Column(
                          children: [
                            const Text(
                              "AUGUST 2024",
                              style: TextStyle(
                                  fontSize: 16,
                                  fontWeight: FontWeight.bold,
                                  color: Colors.black),
                            ),
                            const SizedBox(height: 10),
                            Container(
                              height: 100,
                              color:
                                  Colors.white, // Placeholder for the calendar
                            ),
                          ],
                        ),
                      ),
                      Container(
                        margin: const EdgeInsets.all(8.0),
                        padding:
                            const EdgeInsets.fromLTRB(12.0, 20.0, 12.0, 20.0),
                        decoration: BoxDecoration(
                          color: const Color(0xFF49ABB0),
                          borderRadius: BorderRadius.circular(20),
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            const Text(
                              "PENDING ASSIGNMENTS",
                              style: TextStyle(
                                  fontSize: 16,
                                  fontWeight: FontWeight.w100,
                                  color: Colors.black),
                            ),
                            const SizedBox(height: 10),
                            ListView(
                              shrinkWrap: true,
                              children: [
                                _assignmentTile("DATA STRUCTURES", "20 Feb"),
                                _assignmentTile("OPERATING SYSTEM", "22 Feb"),
                              ],
                            ),
                          ],
                        ),
                      ),
                      const SizedBox(height: 8),
                      ElevatedButton(
                        onPressed: () {},
                        child: const Text("Submit"),
                      ),
                    ],
                  )),
              // Calendar Section

              const SizedBox(height: 12),

              // Pending Assignments

              const SizedBox(height: 10),

              // Personal Analytics
              // Container(
              //   padding: const EdgeInsets.all(12),
              //   decoration: BoxDecoration(
              //     color: Colors.white,
              //     borderRadius: BorderRadius.circular(12),
              //   ),
              //   child: Column(
              //     crossAxisAlignment: CrossAxisAlignment.start,
              //     children: [
              //       const Text(
              //         "PERSONAL ANALYTICS",
              //         style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
              //       ),
              //       const SizedBox(height: 10),
              //       SizedBox(height: 100, child: _buildLineChart()),
              //       const SizedBox(height: 10),
              //       SizedBox(height: 120, child: _buildPieChart()),
              //     ],
              //   ),
              // ),

              const SizedBox(height: 10),

              // Test Scores
              Container(
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(
                  color: const Color(0xFFD9D6B0),
                  borderRadius: BorderRadius.circular(12),
                ),
                child: Column(
                  children: [
                    _scoreTile(
                        "22/01/25", "SSTUT01", "SST", "Vikul J Pawar", "12/15"),
                    _scoreTile(
                        "24/01/25", "SCIUT01", "SCI", "Sol C Sharma", "15/15"),
                    _scoreTile(
                        "25/01/25", "HINUT01", "HIN", "Vinit Pandey", "14/15"),
                    const SizedBox(height: 8),
                    ElevatedButton(
                      onPressed: () {},
                      child: const Text("VIEW ALL"),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),

      // Bottom Navigation Bar
      bottomNavigationBar: BottomNavigationBar(
        backgroundColor: const Color(0xFF4BA3C3),
        selectedItemColor: Colors.white,
        unselectedItemColor: Colors.grey[400],
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.home), label: ""),
          BottomNavigationBarItem(icon: Icon(Icons.analytics), label: ""),
          BottomNavigationBarItem(icon: Icon(Icons.settings), label: ""),
        ],
      ),
    );
  }

  Widget _assignmentTile(String title, String date) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 4.0),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
        decoration: BoxDecoration(
          color: Colors.redAccent,
          borderRadius: BorderRadius.circular(8),
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(title,
                style: const TextStyle(
                    color: Colors.white, fontWeight: FontWeight.bold)),
            Text(date, style: const TextStyle(color: Colors.white)),
          ],
        ),
      ),
    );
  }

  Widget _scoreTile(
      String date, String id, String subject, String teacher, String marks) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 4.0),
      child: Container(
        padding: const EdgeInsets.all(8),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(8),
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(date, style: const TextStyle(fontWeight: FontWeight.bold)),
            Text(id),
            Text(subject),
            Text(teacher),
            Text(marks, style: const TextStyle(fontWeight: FontWeight.bold)),
          ],
        ),
      ),
    );
  }

  // Widget _buildLineChart() {
  //   return LineChart(
  //     LineChartData(
  //       titlesData: FlTitlesData(show: false),
  //       borderData: FlBorderData(show: false),
  //       lineBarsData: [
  //         LineChartBarData(
  //           spots: [FlSpot(0, 40), FlSpot(1, 50), FlSpot(2, 55), FlSpot(3, 60)],
  //           isCurved: true,
  //           color: Colors.redAccent,
  //           barWidth: 3,
  //         ),
  //       ],
  //     ),
  //   );
  // }

  // Widget _buildPieChart() {
  //   return PieChart(
  //     PieChartData(
  //       sections: [
  //         PieChartSectionData(value: 25, color: Colors.red),
  //         PieChartSectionData(value: 30, color: Colors.blue),
  //         PieChartSectionData(value: 20, color: Colors.green),
  //         PieChartSectionData(value: 25, color: Colors.black),
  //       ],
  //     ),
  //   );
  // }
}
