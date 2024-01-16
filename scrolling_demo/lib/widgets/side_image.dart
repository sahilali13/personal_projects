import 'package:flutter/material.dart';

import 'package:google_fonts/google_fonts.dart';

import '../data/data.dart';
import '../data/colors.dart';

class SideImage extends StatelessWidget {
  const SideImage({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    var customHeight = MediaQuery.of(context).size.height;
    var customWidth = MediaQuery.of(context).size.width;
    return Expanded(
      child: SizedBox(
        height: customHeight,
        child: Padding(
          padding: EdgeInsets.only(
              left: customWidth * 0.05, top: customWidth * 0.04),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Padding(
                padding: EdgeInsets.only(bottom: customHeight * 0.04),
                child: Text(
                  "From our students...",
                  style: GoogleFonts.aDLaMDisplay(
                    fontSize: customHeight * 0.05,
                    color: secondaryColor,
                  ),
                  textAlign: TextAlign.start,
                ),
              ),
              SizedBox(
                height: customHeight * 0.56,
                child: Image.network(
                  sideImageUrl,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
