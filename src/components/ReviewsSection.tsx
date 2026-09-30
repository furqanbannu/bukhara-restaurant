import React, { useState } from 'react';
import { Star, Quote, MessageSquarePlus, CheckCircle, ShieldCheck } from 'lucide-react';
import { REVIEWS, RESTAURANT_INFO, ReviewItem } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(REVIEWS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newVisitType, setNewVisitType] = useState('Dinner Buffet');
  const [newRating, setNewRating] = useState(5);
  const [newText, setNewText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newText.trim()) return;

    const addedReview: ReviewItem = {
      id: `rev-${Date.now()}`,
      author: newAuthor.trim(),
      rating: newRating,
      date: 'Just now',
      source: 'Verified Guest Submission',
      text: newText.trim(),
      highlight: newText.slice(0, 45) + '...',
      visitType: newVisitType,
    };

    setReviewsList([addedReview, ...reviewsList]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
      setNewAuthor('');
      setNewText('');
    }, 2000);
  };

  return (
    <section id="reviews" className="py-28 md:py-36 bg-[#2B2118] text-[#F4EFE6] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header with Rating Summary */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-8 border-b border-[#B38A45]/20 gap-8">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#C6A15B]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C6A15B]">
                PATRON TESTIMONIALS
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#F4EFE6] tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Guests of Bukhara
            </h2>
            <p className="text-base text-[#817568] mt-2">
              Reflections on evenings spent amidst fragrant pine breezes and royal hearths.
            </p>
          </div>

          {/* Aggregate Rating Scoreboard Box */}
          <div className="flex items-center gap-6 p-5 bg-[#17130F] border border-[#B38A45]/30">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-4xl font-serif font-bold text-[#F4EFE6] tabular-nums">
                  {RESTAURANT_INFO.rating}
                </span>
                <span className="text-xs text-[#817568] font-sans font-normal">/ 5.0</span>
              </div>
              <div className="flex items-center gap-1 mt-1 text-[#C6A15B]">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C6A15B] text-[#C6A15B]" />
                ))}
                <Star className="w-4 h-4 fill-[#C6A15B]/40 text-[#C6A15B]" />
              </div>
            </div>

            <div className="h-10 w-[1px] bg-[#B38A45]/20" />

            <div>
              <span className="text-sm font-semibold text-[#F4EFE6] block">
                {RESTAURANT_INFO.reviewCount} Reviews
              </span>
              <span className="text-[11px] text-[#817568] uppercase tracking-wider block">
                Google Verified Dining
              </span>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="ml-auto px-4 py-2 text-xs uppercase tracking-[0.16em] border border-[#C6A15B] text-[#C6A15B] hover:bg-[#C6A15B] hover:text-[#17130F] transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2"
            >
              <MessageSquarePlus className="w-3.5 h-3.5" />
              <span>Review Us</span>
            </button>
          </div>
        </div>

        {/* Featured Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviewsList.map((rev) => (
            <div
              key={rev.id}
              className="p-8 md:p-10 bg-[#17130F] border border-[#B38A45]/30 flex flex-col justify-between relative group hover:border-[#C6A15B]/70 transition-all duration-300 shadow-xl"
            >
              {/* Subtle Gold Quotation Mark */}
              <div className="absolute top-6 right-8 text-[#C6A15B]/15 group-hover:text-[#C6A15B]/30 transition-colors pointer-events-none">
                <Quote className="w-16 h-16" />
              </div>

              <div>
                {/* Rating Stars & Visit Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#C6A15B]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C6A15B] text-[#C6A15B]" />
                    ))}
                  </div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#817568] font-mono">
                    {rev.visitType}
                  </span>
                </div>

                {/* Highlight Snippet */}
                {rev.highlight && (
                  <p className="text-sm font-serif italic text-[#C6A15B] mb-4">
                    "{rev.highlight}"
                  </p>
                )}

                {/* Full Review Text */}
                <p className="text-sm md:text-base text-[#F4EFE6]/85 font-light leading-relaxed mb-6">
                  "{rev.text}"
                </p>
              </div>

              {/* Author & Verification */}
              <div className="pt-4 border-t border-[#B38A45]/20 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-serif font-bold text-[#F4EFE6] tracking-wide">
                    {rev.author}
                  </h4>
                  <span className="text-[11px] text-[#817568] block">
                    {rev.source}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#C6A15B]">
                  <ShieldCheck className="w-4 h-4 text-[#C6A15B]" />
                  <span className="text-[10px] tracking-wider uppercase">Verified Patron</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Write a Review Modal */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="w-full max-w-lg bg-[#1E1813] border border-[#B38A45]/40 p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {submitted ? (
              <div className="py-8 text-center flex flex-col items-center">
                <CheckCircle className="w-12 h-12 text-[#C6A15B] mb-3 animate-bounce" />
                <h3 className="text-2xl font-serif text-[#F4EFE6] font-bold mb-2">
                  Thank You
                </h3>
                <p className="text-xs text-[#F4EFE6]/70">
                  Your dining review has been added to our guest chronicle.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview}>
                <div className="flex items-center justify-between pb-4 border-b border-[#B38A45]/20 mb-6">
                  <h3 className="text-2xl font-serif font-bold text-[#F4EFE6]">
                    Chronicle Your Evening
                  </h3>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="text-xs text-[#817568] hover:text-[#C6A15B]"
                  >
                    Cancel
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-[#C6A15B] block mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      placeholder="e.g. Asad Qureshi"
                      className="w-full p-3 bg-[#17130F] border border-white/10 text-[#F4EFE6] text-xs focus:border-[#C6A15B] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] tracking-[0.2em] uppercase text-[#C6A15B] block mb-1">
                        Experience Type
                      </label>
                      <select
                        value={newVisitType}
                        onChange={(e) => setNewVisitType(e.target.value)}
                        className="w-full p-3 bg-[#17130F] border border-white/10 text-[#F4EFE6] text-xs focus:border-[#C6A15B] focus:outline-none"
                      >
                        <option value="Dinner Buffet">Dinner Buffet</option>
                        <option value="Live BBQ Terrace">Live BBQ Terrace</option>
                        <option value="Family Gathering">Family Gathering</option>
                        <option value="Private Dining">Private Dining</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] tracking-[0.2em] uppercase text-[#C6A15B] block mb-1">
                        Rating
                      </label>
                      <select
                        value={newRating}
                        onChange={(e) => setNewRating(Number(e.target.value))}
                        className="w-full p-3 bg-[#17130F] border border-white/10 text-[#F4EFE6] text-xs focus:border-[#C6A15B] focus:outline-none"
                      >
                        <option value={5}>5 Stars - Royal Excellence</option>
                        <option value={4}>4 Stars - Very Good</option>
                        <option value={3}>3 Stars - Average</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-[#C6A15B] block mb-1">
                      Your Review & Thoughts
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={newText}
                      onChange={(e) => setNewText(e.target.value)}
                      placeholder="Share your impressions of the live BBQ, traditional dishes, mountain ambiance, or service..."
                      className="w-full p-3 bg-[#17130F] border border-white/10 text-[#F4EFE6] text-xs focus:border-[#C6A15B] focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 text-xs font-semibold uppercase tracking-[0.2em] bg-[#C6A15B] text-[#17130F] hover:bg-[#E4C88A] transition-colors cursor-pointer"
                >
                  Publish Guest Review
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
