export default function VideoTrailer() {
  return (
    <div className='w-full bg-[#12191f]'>
      <section id="video-trailer" className="py-16 lg:py-24 px-20 bg-[#12191f] max-w-screen-2xl mx-auto">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Video Container */}
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="aspect-video">
                <video
                  id="landing-page-video"
                  className="w-full h-full object-cover"
                  controls
                  crossOrigin="anonymous"
                  data-dash-manifest-uri="https://storage.googleapis.com/production.videos-cdn.PRkhPWVzzhcW.com/encoded_videos/video_bundle_de266003-0fc2-45a5-97b1-1bbe1156229e/dash.mpd"
                  data-hls-manifest-uri="https://storage.googleapis.com/production.videos-cdn.PRkhPWVzzhcW.com/encoded_videos/video_bundle_de266003-0fc2-45a5-97b1-1bbe1156229e/hls.m3u8"
                  data-poster="https://storage.googleapis.com/production.videos-cdn.PRkhPWVzzhcW.com/encoded_videos/video_bundle_de266003-0fc2-45a5-97b1-1bbe1156229e/poster_medium.jpg"
                  data-video-title="Trailer"
                  playsInline
                >
                  <source src="https://storage.googleapis.com/production.videos-cdn.PRkhPWVzzhcW.com/encoded_videos/video_bundle_de266003-0fc2-45a5-97b1-1bbe1156229e/hls.m3u8" type="application/x-mpegURL" />
                  <track
                    kind="subtitles"
                    src="https://storage.googleapis.com/production.videos-cdn.PRkhPWVzzhcW.com/encoded_videos/video_bundle_de266003-0fc2-45a5-97b1-1bbe1156229e/subtitles_en_cc.vtt?1704732569"
                    srcLang="en"
                    label="English (CC)"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Video Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 