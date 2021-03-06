// Source code licensed under Apache License 2.0. 
// Copyright © 2017 William Ngan. (https://github.com/williamngan/pts)

(function(){
  // Pts.namespace( this ); // add Pts into scope if needed
  
  var demoID = "canvas_paragraphbox2";
  
  // create Space and Form
  var space = new CanvasSpace("#"+demoID).setup({ retina: true, bgcolor: "#e2e6ef", resize: true });
  var form = space.getForm();
  var content = "I have discovered a truly remarkable proof of this theorem which this margin is too small to contain.";
  
  // animation
  space.add({

    start: () => {
      form.font( 14 );
    },
    
    animate: (time, ftime) => {
      let size = space.center.$subtract( space.pointer ).abs().multiply(2);
      let rect = Rectangle.fromCenter( space.center, size.$max( space.size.$divide(6) )  );
      let boxes = Rectangle.halves( rect, 0.5 );

      form.fill("#fff").stroke("#0ca", 3).rect( rect );
      form.fillOnly("#123");
      form.paragraphBox( boxes[0], content, 1, "top", false );
      form.alignText("right").paragraphBox( boxes[1], content, 2, "bottom", false );
      form.strokeOnly("#42e", 1).line( [new Pt(space.center.x, 0), new Pt(space.center.x, space.size.y)] );
    }
    
  });
  
  // start
  // Note that `playOnce(200)` will stop after 200ms. Use `play()` to run the animation loop continuously. 
  space.playOnce(200).bindMouse().bindTouch();
  
  // For use in demo page only
  if (window.registerDemo) window.registerDemo(demoID, space);
  
})();
