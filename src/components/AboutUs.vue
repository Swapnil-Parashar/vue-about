<template>
  <div>
    <div class="hero-section">
    </div>

    <div class="container mx-auto p-6 space-y-8">
      <!-- Statistics Section -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center m-8 pb-8">
        <div class="statistic">
          <p class="statistic-number">{{ animatedNumbers.associates }} +</p>
          <p class="statistic-description">Associates throughout the business</p>
        </div>
        <div class="statistic">
          <p class="statistic-number">{{ animatedNumbers.locations }} +</p>
          <p class="statistic-description">Locations across UK</p>
        </div>
        <div class="statistic">
          <p class="statistic-number">{{ animatedNumbers.suppliers }} +</p>
          <p class="statistic-description">Suppliers manufacturing products</p>
        </div>
      </div>

      <!-- First Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div class="content">
          <h2 class="section-heading">Our Mission</h2>
          <p class="text-paragraph text-lg mb-6">
            Welcome to Plumb Distribution, where we take great pride in
            supplying underfloor heating systems and plumbing fittings. We
            believe in offering solutions that are both technically advanced and
            easy to use, so you can enjoy the comfort and convenience of
            underfloor heating in your home or business.
          </p>
        </div>
        <div class="image-container">
          <img
            src="@/assets/images/our-mission.jpg"
            alt="Our Mission"
          />
        </div>
      </div>

      <!-- Second Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div class="image-container md:order-first">
          <img
            src="@/assets/images/expert-solutions.jpg"
            alt="Expert Solutions"
          />
        </div>
        <div class="content">
          <h2 class="section-heading">Expert Solutions</h2>
          <p class="text-paragraph text-lg mb-6">
            Whether you are a plumber, contractor, builder, or homeowner, we
            have the experience and expertise to help you choose the right
            underfloor heating system for your needs. Our range includes
            everything from electric and water-based solutions to smart heating
            controls, all designed to keep your space warm and comfortable.
          </p>
        </div>
      </div>

      <!-- Third Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div class="content">
          <h2 class="section-heading">Quality Assurance</h2>
          <p class="text-paragraph text-lg mb-6">
            At the core of our business is our commitment to quality. All of our
            products are manufactured to the highest standards and come with
            warranties for your peace of mind. Whether you are looking to
            retrofit an existing building or install underfloor heating in a new
            construction, we have the products and expertise to help you achieve
            your goals.
          </p>
        </div>
        <div class="image-container">
          <img
            src="@/assets/images/quality-products.jpg"
            alt="Quality Products"
          />
        </div>
      </div>

      <!-- Fourth Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div class="image-container md:order-first">
          <img
            src="@/assets/images/innovative-solutions.jpg"
            alt="Innovative Solutions"
          />
        </div>
        <div class="content">
          <h2 class="section-heading">Innovative Approach</h2>
          <p class="text-paragraph text-lg mb-6">
            We believe that every space should be warm and inviting, and we are
            dedicated to helping you achieve this through our innovative
            underfloor heating solutions. Contact us today to find out how we
            can help you stay warm and comfortable all year round.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      animatedNumbers: {
        associates: 1,
        locations: 1,
        suppliers: 1,
      },
    };
  },
  mounted() {
    // Simulate the animation of numbers from 1 to the final values
    this.animateNumbersTo({
      associates: 3500,
      locations: 500,
      suppliers: 3000,
    });
  },
  methods: {
    animateNumbersTo({ associates, locations, suppliers }) {
      const step = 50; // Number of steps
      const delay = 20; // Delay between steps in milliseconds

      const animate = (current, target, increment, key) => {
        if (current <= target) {
          setTimeout(() => {
            this.animatedNumbers[key] = current;
            animate(current + increment, target, increment, key);
          }, delay);
        }
      };

      animate(1, associates, Math.ceil((associates - 1) / step), 'associates');
      animate(1, locations, Math.ceil((locations - 1) / step), 'locations');
      animate(1, suppliers, Math.ceil((suppliers - 1) / step), 'suppliers');
    },
  },
};
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

.container {
  @apply min-w-3xl;
}

.hero-section {
  background-image: url("@/assets/images/hero.jpg");
  background-size: cover;
  background-position: center;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.hero-heading {
  position: relative;
  color: white;
  font-size: 2.5rem;
  text-align: left;
  max-width: 70%;
}

.primary-color {
  color: rgb(var(--primary));
}

.section-heading {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  max-width: 100%;
}

.image-container img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.statistic {
  text-align: center;
}

.statistic-number {
  font-size: 3rem;
  font-weight: 300;
  color: #00446a;
  margin-bottom: 0.5rem;
}

.statistic-description {
  font-size: 1rem;
}

@media (max-width: 768px) {
  .grid-cols-1 {
    grid-template-columns: 1fr;
  }

  .grid-cols-2 {
    grid-template-columns: 1fr;
  }

  .md\:order-first {
    order: 1;
  }

  .md\:order-last {
    order: 2;
  }
}
</style>
