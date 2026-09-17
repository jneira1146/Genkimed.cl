import subprocess

# Faster, clean crossfade or direct concat with framerate=25 and 6 seconds per slide = 24 seconds total
cmd = [
  "ffmpeg", "-y",
  "-loop", "1", "-t", "6", "-i", "src/assets/images/ver3_implant_render_1789171932391.jpg",
  "-loop", "1", "-t", "6", "-i", "src/assets/images/ver3_instrument_set_1789171983847.jpg",
  "-loop", "1", "-t", "6", "-i", "src/assets/images/ver3_vertebra_procedure_1789171950061.jpg",
  "-loop", "1", "-t", "6", "-i", "src/assets/images/ver3_fluoroscopy_xray_1789171966544.jpg",
  "-f", "lavfi", "-t", "24", "-i", "anullsrc=r=44100:cl=stereo",
  "-filter_complex",
  "[0:v]scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2,setsar=1,format=yuv420p[v0];"
  "[1:v]scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2,setsar=1,format=yuv420p[v1];"
  "[2:v]scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2,setsar=1,format=yuv420p[v2];"
  "[3:v]scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2,setsar=1,format=yuv420p[v3];"
  "[v0][v1][v2][v3]concat=n=4:v=1:a=0[outv]",
  "-map", "[outv]", "-map", "4:a",
  "-c:v", "libx264", "-profile:v", "baseline", "-level", "3.0", "-pix_fmt", "yuv420p", "-r", "25",
  "-preset", "ultrafast", "-crf", "23", "-movflags", "+faststart",
  "-c:a", "aac", "-b:a", "128k",
  "public/ver3-surgical-procedure.mp4"
]

res = subprocess.run(cmd, capture_output=True, text=True)
print("Returncode:", res.returncode)
if res.returncode != 0:
    print("Stderr:", res.stderr)
else:
    print("Success!")
