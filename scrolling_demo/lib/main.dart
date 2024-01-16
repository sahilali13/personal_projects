import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import './data/colors.dart';
import './widgets/testimonial.dart';
import './widgets/side_image.dart';
import './widgets/enroll_now_button.dart';

void main() {
  LicenseRegistry.addLicense(() async* {
    final license = await rootBundle.loadString('google_fonts/OFL_ABeeZee.txt');
    yield LicenseEntryWithLineBreaks(['google_fonts'], license);

    final license2 =
        await rootBundle.loadString('google_fonts/OFL_ADLaMDisplay.txt');
    yield LicenseEntryWithLineBreaks(['google_fonts'], license2);
  });

  runApp(const ScrollDemo());
}

class ScrollDemo extends StatefulWidget {
  const ScrollDemo({Key? key}) : super(key: key);

  @override
  State<StatefulWidget> createState() => _ScrollDemoState();
}

class _ScrollDemoState extends State<ScrollDemo> {
  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    var customHeight = MediaQuery.of(context).size.height;
    var customWidth = MediaQuery.of(context).size.width;

    return MaterialApp(
      title: 'Scroll Page View Demo',
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: Builder(builder: (context) {
          return Container(
            height: customHeight,
            width: customWidth,
            color: primaryColor,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                SizedBox(
                  height: customHeight * 0.9,
                  child: const Row(
                    children: [
                      SideImage(),
                      Testimonial(),
                    ],
                  ),
                ),
                Container(
                  height: customHeight * 0.1,
                  padding: EdgeInsets.only(bottom: customHeight * 0.02),
                  child: EnrollNowButton(
                    customWidth: customWidth,
                    customHeight: customHeight,
                  ),
                ),
              ],
            ),
          );
        }),
      ),
    );
  }
}
